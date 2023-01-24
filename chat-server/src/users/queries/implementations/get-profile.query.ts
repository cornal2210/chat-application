import { User } from '../../user.entity';

export class GetProfileQuery {
  constructor(public readonly user: User) {}
}
