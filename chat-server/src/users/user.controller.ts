import { Controller, Get, Query } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { CheckUsernameDTO } from './dto/user.dto';
import { CheckUsernameQuery } from './queries/implementations/check-username.query';

@Controller('users')
export class UsersController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async checkUsername(@Query('username') query: CheckUsernameDTO) {
    return this.queryBus.execute(new CheckUsernameQuery(query));
  }
}
