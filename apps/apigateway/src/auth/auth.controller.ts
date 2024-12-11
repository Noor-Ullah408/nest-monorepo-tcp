import { Controller, Body, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User, UserDto } from 'proto/auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(@Body() data: UserDto) {
    const user = await this.findUser(data);
    if (user) {
      const checkPassword = await this.validateUser(data);
      if (checkPassword) {
        return this.authService.login(data);
      }
    }
    return new UnauthorizedException('Incorrect Credentials');
  }
  async findUsers(): Promise<User[]> {
    return await this.authService.findUsers();
  }
  async findUser(user: UserDto): Promise<User | null> {
    return this.authService.findUser(user);
  }
  async validateUser(user: UserDto): Promise<boolean> {
    return this.authService.validateUser(user);
  }
}
