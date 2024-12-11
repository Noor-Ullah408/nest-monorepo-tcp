import { Injectable } from '@nestjs/common';
import { UserDto } from 'proto/auth';

@Injectable()
export class UsersService {
  constructor() {}
  async login(user: UserDto) {
    const payload = { email: user.email };
    return {
      token: `${payload.email}`,
    };
  }
}
