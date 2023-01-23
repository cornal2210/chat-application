import { CommandHandler, IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../users/user.entity';
import { Repository } from 'typeorm';
import { RegisterCommand } from '../implementations/register.command';
import { HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from '../../../users/services/user.service';
import { instanceToPlain } from 'class-transformer';

@CommandHandler(RegisterCommand)
export class RegisterHandler implements IQueryHandler<RegisterCommand> {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private readonly userService: UserService,
  ) {}
  async execute({ payload }: RegisterCommand) {
    const user = await this.userRepo.findOne({
      where: { username: payload.username },
    });

    if (user) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }

    const isSaved = await this.userService.register(payload);
    return instanceToPlain(isSaved);
  }
}
