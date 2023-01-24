import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProfileQuery } from '../implementations/get-profile.query';

@QueryHandler(GetProfileQuery)
export class GetProfileHandler implements IQueryHandler<GetProfileQuery> {
  constructor() {}

  async execute({ user }: GetProfileQuery) {
    return user;
  }
}
