import { compareHash } from 'src/utils/helpers';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { TokenPayload } from 'src/utils/types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  public async getAuthenticatedUser(
    username: string,
    plainTextPassword: string,
  ): Promise<User | null> {
    const user = await this.userRepo
      .createQueryBuilder('user')
      .where('username = :username', { username })
      .getOne();
    if (!user) {
      throw new NotFoundException();
    }

    const isValid = await compareHash(plainTextPassword, user.password);
    return isValid ? user : null;
  }

  public getAccessToken(userId: string): string {
    const payload: TokenPayload = { userId };
    const token = this.jwtService.sign(payload);
    return token;
  }
}
