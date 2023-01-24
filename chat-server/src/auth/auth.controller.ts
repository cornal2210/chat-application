import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { RegisterCommand } from './commands/implementations/register.command';
import { RegisterDTO } from './dto/auth.dto';
import { TransformInterCeptor } from '../interceptors/transform.interceptor';
import { LocalAuthGuard } from './local-auth.guard';
import IRequest from './request-with-user.interface';
import { AuthService } from './auth.service';

@Controller('auth')
@UseInterceptors(TransformInterCeptor)
export class AuthController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  async register(@Body() payload: RegisterDTO) {
    return await this.commandBus.execute(new RegisterCommand(payload));
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: IRequest) {
    const { user } = req;
    return this.authService.getAccessToken(user.id);
  }
}
