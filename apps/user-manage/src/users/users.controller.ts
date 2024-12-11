import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  CreateUserDto,
  Empty,
  FindOneUserDto,
  UpdateUserDto,
  User,
  UserManagementServiceController,
  UserManagementServiceControllerMethods,
  Users,
} from 'proto/user-manage';
import { Observable } from 'rxjs';

@Controller('users')
@UserManagementServiceControllerMethods()
export class UsersController implements UserManagementServiceController {
  constructor(private readonly usersService: UsersService) {}
  findAllUsers(request: Empty): Observable<Users> | Promise<Users> {
    const users = this.usersService.findAllUsers();
    return users;
  }
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
