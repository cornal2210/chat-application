import {
  Controller,
  Get,
  Query,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { IRequest } from '../utils/types';
import { TransformInterCeptor } from '../interceptors/transform.interceptor';
import { CheckUsernameDTO } from './dto/user.dto';
import { CheckUsernameQuery } from './queries/implementations/check-username.query';
import { GetProfileQuery } from './queries/implementations/get-profile.query';
import JwtAuthGuard from '../auth/jwt-auth.guard';

@Controller('users')
@UseInterceptors(TransformInterCeptor)
export class UsersController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async checkUsername(@Query('username') query: CheckUsernameDTO) {
    return this.queryBus.execute(new CheckUsernameQuery(query));
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@Req() req: IRequest) {
    const { user } = req;
    return await this.queryBus.execute(new GetProfileQuery(user));
  }
}
