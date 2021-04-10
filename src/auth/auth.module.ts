import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from "./google.strategy";
import { JwtStrategy } from "./jwt.strategy";
import { UsersService } from 'src/users/users.service';


@Module({
  imports: [
    UsersService,
    ConfigModule
  ],
  controllers: [AuthController],
  providers: [
    UsersService,
    AuthService,
    GoogleStrategy,
    JwtStrategy
  ]
})

export class AuthModule {}
