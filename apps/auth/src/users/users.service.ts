import { Injectable } from '@nestjs/common';
import { PrismaService } from 'apps/prisma.service';
import { UserDto } from 'proto/auth';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async login(user: UserDto) {
    const payload = { email: user.email };
    return {
      token: `${payload.email}`,
    };
  }
}
