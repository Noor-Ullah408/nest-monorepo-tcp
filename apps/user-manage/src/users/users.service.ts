import { Injectable } from '@nestjs/common';
import { PrismaService } from 'apps/prisma.service';
import {
  CreateUserDto,
  FindOneUserDto,
  UpdateUserDto,
  Users,
} from 'proto/user-manage';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async findAllUsers(): Promise<Users> {
    const users = await this.prisma.user.findMany();
    const result = {
      users: users,
    };
    return result;
  }
  async findOneUser(data: FindOneUserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    return user;
  }
  async createUser(data: CreateUserDto) {
    const user = await this.prisma.user.create({
      data: {
        ...data,
      },
    });
    return user;
  }
  async updateUser(data: UpdateUserDto) {
    const user = await this.prisma.user.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });
    return user;
  }
  async deleteUser(data: FindOneUserDto) {
    const user = await this.prisma.user.delete({
      where: {
        id: data.id,
      },
    });
    return user;
  }
}
