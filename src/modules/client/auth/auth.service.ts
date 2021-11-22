import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import bcrypt from 'bcrypt';

import { UserService } from 'Modules/client/user/database/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.user({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars

      return user;
    }

    return null;
  }

  async registerUser(data: Prisma.UserCreateInput) {
    const user = await this.userService.createUser(data);

    return user;
  }
}
