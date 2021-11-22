import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';

import { AuthModule } from 'Modules/client/auth/auth.module';
import { UserModule } from 'Modules/client/user/user.module';
import { UserController } from 'Modules/client/user/user.controller';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
