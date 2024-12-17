import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { User } from '@prisma/client';
import { CreateUserDto, FindOneUserDto, UpdateUserDto } from '../dto/user.dto';
import { EventPattern } from '@nestjs/microservices';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('all')
  getAllUsers() {
    return 'Get All Users';
  }
  @EventPattern('all_users')
  findAllUsers(): Observable<User[]> | Promise<User[]> {
    const users = this.usersService.findAllUsers();
    return users;
  }
  @EventPattern('one_user')
  findOneUser(request: FindOneUserDto): Promise<User> | Observable<User> {
    const user = this.usersService.findOneUser(request);
    return user;
  }
  createUser(request: CreateUserDto): Promise<User> | Observable<User> {
    const user = this.usersService.createUser(request);
    return user;
  }
  updateUser(request: UpdateUserDto): Promise<User> | Observable<User> | User {
    const user = this.usersService.updateUser(request);
    return user;
  }
  deleteUser(request: FindOneUserDto): Promise<User> | Observable<User> | User {
    const user = this.usersService.deleteUser(request);
    return user;
  }
}
