import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";

import { AuthService } from "./auth.service";
import { Provider } from "../utils/enums";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(
        private readonly configService: ConfigService,
        private readonly authService: AuthService
    ) { 
        super({
            clientID    : configService.get<string>('GOOGLE_CLIENT_ID'),
            clientSecret: configService.get<string>('GOOGLE_CLIENT_SECRET'),
            callbackURL : configService.get<string>('GOOGLE_CALLBACK_URL'),
            passReqToCallback: true,
            scope: ['profile']
        });
    }

    async validate(request: any, accessToken: string, refreshToken: string, profile, done: Function) {
        try {
            console.log(profile);
            const { name, emails, photos } = profile

            const jwt: string = await this.authService.validateOAuthLogin(profile.id, Provider.GOOGLE, profile);
            const user = { name, emails, photos, jwt }

            done(null, user);
        } catch(err) {
            // console.log(err)
            done(err, false);
        }
    }
}

