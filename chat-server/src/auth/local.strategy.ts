import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UserService } from '../users/services/user.service';
import { User } from '../users/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({ usernameField: 'username' });
  }
  async validate(email: string, password: string): Promise<User> {
    return this.userService.getAuthenticatedUser(email, password);
  }
}
