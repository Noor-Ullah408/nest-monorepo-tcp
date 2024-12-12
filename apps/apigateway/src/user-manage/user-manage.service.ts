import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, EventPattern } from '@nestjs/microservices';
import { CreateUserDto, FindOneUserDto, UpdateUserDto } from './dto/user.dto';
@Injectable()
export class UserManageService {
  constructor(@Inject('USER_MANAGE') private client: ClientProxy) {}
  //Below are all regular methods
  @EventPattern('one_user')
  findOneUser(request: FindOneUserDto) {
    return this.client.send<string>('one_user', { payload: request });
  }
  @EventPattern('all_users')
  findAllUsers() {
    return this.client.send<string>('all_users', { payload: '' });
  }
  @EventPattern('create_user')
  createUser(request: CreateUserDto) {
    return this.client.send<string>('create_user', { payload: request });
  }
  @EventPattern('update_user')
  updateUser(request: UpdateUserDto) {
    return this.client.send<string>('update_user', { payload: request });
  }
  @EventPattern('delete_user')
  deleteUser(request: FindOneUserDto) {
    return this.client.send<string>('delete_user', { payload: request });
  }
}
