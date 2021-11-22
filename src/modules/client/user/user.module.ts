import { Module } from '@nestjs/common';
import { PrismaService } from 'Providers/prisma.service';

import { UserService } from './database/user.service';

@Module({
  providers: [UserService, PrismaService],
  exports: [UserService],
})
export class UserModule {}
