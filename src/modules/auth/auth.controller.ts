import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { creators } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('register')
  register(@Body() body: creators) {
    const registerStatus = this.authService.register(body);

    return registerStatus;
  }

  @Post('login')
  login(@Body() body: Pick<creators, 'username' | 'password'>) {
    const registerStatus = this.authService.login(body);

    return registerStatus;
  }
}
