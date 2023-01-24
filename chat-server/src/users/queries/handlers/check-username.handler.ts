import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../users/user.entity';
import { Repository } from 'typeorm';
import { CheckUsernameQuery } from '../implementations/check-username.query';
import { HttpException, HttpStatus } from '@nestjs/common';
import { UserAlreadyExists } from '../../exceptions/user-already-exists';

@QueryHandler(CheckUsernameQuery)
export class CheckUsernameHandler implements IQueryHandler<CheckUsernameQuery> {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}
  async execute({ query }: CheckUsernameQuery) {
    if (!query) {
      throw new HttpException('Invalid Query', HttpStatus.BAD_REQUEST);
    }
    const { username } = query;
    const user = await this.userRepo.findOne({
      where: { username },
    });
    console.log(user);
    if (user) {
      throw new UserAlreadyExists();
    }
    return HttpStatus.OK;
  }
}
