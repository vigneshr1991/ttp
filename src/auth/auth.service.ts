import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { sign } from 'jsonwebtoken';

import { Provider } from "../utils/enums";
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
            console.log("1 user :", user);

            if (!user) {
                const userObj: IUser = {
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    isActive: true,
                    // roleId: 1,
                    email: profile.emails,
                    providerId: parseInt(providerId),
                };
                user = await this.usersService.createUser(userObj);
                console.log("2 user :", user);
            }
                
            const payload = {
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                email: profile.emails,
                providerId,
                provider
            }
            
            console.log("payload :", payload)

            const jwt: string = sign(payload, this.configService.get<string>('JWT_SECRET_KEY'), { expiresIn: 3600 });
            console.log("jwt :", jwt);

            return jwt;
        } catch (err) {
            throw new InternalServerErrorException('validateOAuthLogin :', err.message);
        }
    }
}
