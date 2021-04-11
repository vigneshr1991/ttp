import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { GoogleAuthGuard } from "./google-auth.guard";
import { JwtAuthGuard } from "./jwt-auth.guard";

@Controller('auth')
export class AuthController {
    @Get('google')
    @UseGuards(GoogleAuthGuard)
    googleLogin() {
        // initiates the Google OAuth2 login flow
    }

    @Get('google/callback')
    @UseGuards(GoogleAuthGuard)
    googleLoginCallback(@Req() req, @Res() res) {
        // handles the Google OAuth2 callback
        const jwt: string = req.user.jwt;
        if (jwt) {
            res.send({ jwt });
        } else {
            throw new Error('Un authorized')
        }
    }

    @Get('protected')
    @UseGuards(JwtAuthGuard)
    protectedResource() {
        return 'JWT is working!';
    }
}
