import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { sign } from 'jsonwebtoken';

import { Provider, UserRole } from "../utils/enums";
import { UsersService } from "../users/users.service";
import { IUser } from "../users/users.interface";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly configService: ConfigService,
    ) { };

    async validateOAuthLogin(providerId: string, provider: Provider, profile: any): Promise<string> {
        try {
            let user: IUser = await this.usersService.findOneByProviderId(parseInt(providerId));
            const email = profile.emails || providerId+ "@gmail.com";

            if (!user) {
                const userObj: IUser = {
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    avatar: profile._json.picture,
                    isActive: true,
                    roleId: 1,
                    email,
                    provider,
                    providerId: providerId,
                };
                user = await this.usersService.createUser(userObj);
            }
                
            const payload = {
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                email: profile.emails,
                providerId,
                provider,
                role: UserRole.CONSULTANT
            };

            const jwt: string = sign(payload, this.configService.get<string>('JWT_SECRET_KEY'), { expiresIn: 3600 });

            return jwt;
        } catch (err) {
            throw new InternalServerErrorException('validateOAuthLogin :', err.message);
        }
    }
}
