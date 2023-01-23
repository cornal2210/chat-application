import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { RegisterCommand } from './commands/implementations/register.command';
import { RegisterDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('register')
  async register(@Body() payload: RegisterDTO) {
    return await this.commandBus.execute(new RegisterCommand(payload));
  }
}
