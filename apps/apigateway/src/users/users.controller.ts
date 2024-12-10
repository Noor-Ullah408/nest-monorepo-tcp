import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from 'proto/auth';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  async login(@Body() data: UserDto) {
    const user = await this.findUser(data);
    if (user) {
      const checkPassword = await this.validateUser(data);
      if (checkPassword) {
        return this.usersService.login(data);
      }
    }
    return new UnauthorizedException('Incorrect Credentials');
  }
  async findUser(user: UserDto): Promise<User | null> {
    return this.usersService.findUser(user);
  }

  async validateUser(user: UserDto): Promise<boolean> {
    return this.usersService.validateUser(user);
  }
}
