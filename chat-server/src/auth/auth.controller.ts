import {
  Body,
  Controller,
  Post,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { IRequest } from '../utils/types';
import { RegisterCommand } from './commands/implementations/register.command';
import { RegisterDTO } from './dto/auth.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { TransformInterCeptor } from '../interceptors/transform.interceptor';
import { LoginCommand } from './commands/implementations/login.command';

@Controller('auth')
@UseInterceptors(TransformInterCeptor)
export class AuthController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('register')
  async register(@Body() payload: RegisterDTO) {
    return await this.commandBus.execute(new RegisterCommand(payload));
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() request: IRequest) {
    const { user } = request;
    return this.commandBus.execute(new LoginCommand(user.id));
  }
}
