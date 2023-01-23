import { RegisterHandler } from './commands/handlers/register.handler';
import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { UserService } from '../users/services/user.service';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [UsersModule, CqrsModule, TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [RegisterHandler, UserService],
})
export class AuthModule {}
