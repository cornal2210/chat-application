import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { TransformInterCeptor } from '../interceptors/transform.interceptor';
import { CheckUsernameDTO } from './dto/user.dto';
import { CheckUsernameQuery } from './queries/implementations/check-username.query';

@Controller('users')
@UseInterceptors(TransformInterCeptor)
export class UsersController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async checkUsername(@Query('username') query: CheckUsernameDTO) {
    return this.queryBus.execute(new CheckUsernameQuery(query));
  }
}
