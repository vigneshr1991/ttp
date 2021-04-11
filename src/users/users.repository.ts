import { EntityRepository, Repository } from 'typeorm';

import { User } from './user.entity';
import { IUser } from './users.interface';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  createUser = async (user: IUser) => {
    return await this.save(user);
  };

  findUserById = async (userId: number) => {
    return this.findOneOrFail(userId);
  };

  findUserByProviderId = async (providerId: number) => {
    return this.findOne({ where: { providerId } });
  }
}