import { Request } from 'express';
import { User } from '../users/user.entity';

interface IRequest extends Request {
  user: User;
}

export default IRequest;