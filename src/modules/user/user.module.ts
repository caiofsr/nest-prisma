import { Module } from '@nestjs/common';

import { UserService } from './database/user.service';

@Module({
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
