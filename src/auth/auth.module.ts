import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from "./google.strategy";
import { JwtStrategy } from "./jwt.strategy";
import { UsersModule } from '../users/users.module';


@Module({
  imports: [
    UsersModule
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    GoogleStrategy,
    JwtStrategy
  ]
})

export class AuthModule {}
