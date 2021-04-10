import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {

    constructor(
        /*private readonly authService: AuthService*/
        private readonly configService: ConfigService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get<string>('JWT_SECRET_KEY')
        });
    }

    async sign() {

    }

    async validate(payload: any, done: Function) {
        try {
            console.log("validate :", payload)
            // You could add a function to the authService to verify the claims of the token:
            // i.e. does the user still have the roles that are claimed by the token
            //const validClaims = await this.authService.verifyTokenClaims(payload);
            
            //if (!validClaims)
            //    return done(new UnauthorizedException('invalid token claims'), false);
    
            done(null, payload);
        } catch (err) {
            console.log("validate err :", err)
            throw new UnauthorizedException('unauthorized', err.message);
        }
    }

}