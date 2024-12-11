import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  CreateUserDto,
  Empty,
  FindOneUserDto,
  UpdateUserDto,
  USER_MANAGEMENT_PACKAGE_NAME,
  USER_MANAGEMENT_SERVICE_NAME,
  UserManagementServiceClient,
} from 'proto/user-manage';

@Injectable()
export class UserManageService implements OnModuleInit {
  private userManageService: UserManagementServiceClient;
  //We inject the gRPC with the required Service Name in the constructor
  // along with our PrismaService
  constructor(
    @Inject(USER_MANAGEMENT_PACKAGE_NAME) private client: ClientGrpc,
  ) {}
  //This initializes our gRPC client with the correct service names
  onModuleInit() {
    this.userManageService =
      this.client.getService<UserManagementServiceClient>(
        USER_MANAGEMENT_SERVICE_NAME,
      );
  }
  //Below are all gRPC methods
  findOneUser(request: FindOneUserDto) {
    return this.userManageService.findOneUser(request);
  }
  findAllUsers(request: Empty) {
    return this.userManageService.findAllUsers(request);
  }
  createUser(request: CreateUserDto) {
    return this.userManageService.createUser(request);
  }
  updateUser(request: UpdateUserDto) {
    return this.userManageService.updateUser(request);
  }
  deleteUser(request: FindOneUserDto) {
    return this.userManageService.deleteUser(request);
  }
}
