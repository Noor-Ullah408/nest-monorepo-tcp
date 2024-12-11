import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto, FindOneUserDto, UpdateUserDto } from './dto/user.dto';
@Injectable()
export class UserManageService {
  constructor(@Inject('USER_MANAGE') private client: ClientProxy) {}
  //Below are all regular methods
  findOneUser(request: FindOneUserDto) {
    return this.client.emit<string>('one_user', { payload: request });
  }
  findAllUsers() {
    return this.client.emit<string>('all_users', { payload: '' });
  }
  createUser(request: CreateUserDto) {
    return this.client.emit<string>('create_user', { payload: request });
  }
  updateUser(request: UpdateUserDto) {
    return this.client.emit<string>('update_user', { payload: request });
  }
  deleteUser(request: FindOneUserDto) {
    return this.client.emit<string>('delete_user', { payload: request });
  }
}
