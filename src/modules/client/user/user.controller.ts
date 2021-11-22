import { Controller, Get } from '@nestjs/common';

import { UserService } from './database/user.service';

@Controller('user')
export class UserController {
  constructor(private usersService: UserService) {}

  @Get()
  async getUsers() {
    return this.usersService.users({});
  }
}
