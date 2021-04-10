import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserRepository } from "./users.repository";
import { IUser } from './users.interface';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) {}

    async findOneByProviderId(providerId: number) {
        return await this.userRepository.findUserByProviderId(providerId) as IUser;
    }

    async findOneByUserId(userId: number) {
        return await this.userRepository.findUserById(userId) as IUser;
    }

    async createUser(user: IUser) {
        return await this.userRepository.createUser(user) as IUser;
    }
}
