import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller('app')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user); // TODO: return JWT access token
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): any {
    // TODO: require an Bearer token, validate token
    return req.user;
  }
}
