import { Injectable } from '@nestjs/common';

import { UsersRepository } from "./users.repository";
import { IUser } from './users.interface';

@Injectable()
export class UsersService {
    constructor(
        private usersRepository: UsersRepository,
    ) {}

    async findOneByProviderId(providerId: number) {
        return await this.usersRepository.findUserByProviderId(providerId) as IUser;
    }

    async findOneByUserId(userId: number) {
        return await this.usersRepository.findUserById(userId) as IUser;
    }

    async createUser(user: IUser) {
        return await this.usersRepository.createUser(user) as IUser;
    }
}
