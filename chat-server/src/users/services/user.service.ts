import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDTO } from '../../auth/dto/auth.dto';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { hashPassword } from 'src/utils/helpers';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}
  async register(payload: RegisterDTO): Promise<boolean> {
    const userExists = await this.userRepo.findOne({
      where: { username: payload.username },
    });

    if (userExists)
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    const password = await hashPassword(payload.password);
    const user = await this.userRepo.create({
      username: payload.username,
      firstName: payload.firstName,
      lastName: payload.lastName,
      password,
    });
    await this.userRepo.save(user);

    return true;
  }
}
