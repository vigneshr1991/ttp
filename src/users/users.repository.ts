import { EntityRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { User } from './user.entity';
import { IUser } from './users.interface';

// @Injectable()
@EntityRepository(User)
export class UserRepository extends Repository<User> {
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