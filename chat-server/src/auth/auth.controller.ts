import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { RegisterCommand } from './commands/implementations/register.command';
import { RegisterDTO } from './dto/auth.dto';
import { TransformInterCeptor } from '../interceptors/transform.interceptor';

@Controller('auth')
@UseInterceptors(TransformInterCeptor)
export class AuthController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('register')
  async register(@Body() payload: RegisterDTO) {
    return await this.commandBus.execute(new RegisterCommand(payload));
  }
}
