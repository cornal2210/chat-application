import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LoginCommand } from '../implementations/login.command';
import { AuthService } from '../../auth.service';

@CommandHandler(LoginCommand)
export class LoginHandler implements ICommandHandler<LoginCommand> {
  constructor(private readonly authService: AuthService) {}

  async execute(payload: LoginCommand) {
    return await this.authService.getAccessToken(payload.userId);
  }
}
