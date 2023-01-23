import { CheckUsernameDTO } from '../../dto/user.dto';

export class CheckUsernameQuery {
  constructor(public readonly query: CheckUsernameDTO) {}
}
