import { Prisma } from '.prisma/client';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body() data: Prisma.UserCreateInput) {
    return this.authService.registerUser(data);
  }
}
