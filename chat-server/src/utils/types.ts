import { User } from '../users/user.entity';
import { Request } from 'express';
export interface IRequest extends Request {
  user: User;
}

export interface TokenPayload {
  userId: string;
}
