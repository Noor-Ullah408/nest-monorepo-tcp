import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'apps/prisma.service';
import { CreateUserDto, FindOneUserDto, UpdateUserDto } from '../dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async findAllUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
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
