import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { UserModule } from 'Modules/user/user.module';

@Module({
  imports: [UserModule, PassportModule],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
