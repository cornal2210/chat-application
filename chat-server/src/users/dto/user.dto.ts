import { IsNotEmpty, IsString } from 'class-validator';

export class CheckUsernameDTO {
  @IsNotEmpty()
  @IsString()
  username: string;
}
