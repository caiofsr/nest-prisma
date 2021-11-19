import { Module } from '@nestjs/common';
import { UserController } from 'Modules/user/user.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
