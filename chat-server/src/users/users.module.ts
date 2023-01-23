import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { User } from './user.entity';
import { UsersController } from './user.controller';
import { CheckUsernameHandler } from './queries/handlers/check-username.handler';

@Module({
  imports: [TypeOrmModule.forFeature([User]), CqrsModule],
  controllers: [UsersController],
  providers: [CheckUsernameHandler],
})
export class UsersModule {}
