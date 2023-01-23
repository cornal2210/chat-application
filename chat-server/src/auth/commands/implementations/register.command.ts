import { RegisterDTO } from '../../dto/auth.dto';

export class RegisterCommand {
  constructor(public readonly payload: RegisterDTO) {}
}
