import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { UserManageService } from './user-manage.service';
import {
  CreateUserDto,
  Empty,
  FindOneUserDto,
  UpdateUserDto,
} from 'proto/user-manage';

@Controller('user-manage')
export class UserManageController {
  constructor(private readonly userManageService: UserManageService) {}

  @Post('create')
  create(@Body() createUserManageDto: CreateUserDto) {
    return this.userManageService.createUser(createUserManageDto);
  }

  @Get()
  findAll(request: Empty) {
    return this.userManageService.findAllUsers(request);
  }

  @Get(':id')
  findOne(@Body() request: FindOneUserDto) {
    return this.userManageService.findOneUser(request);
  }

  @Patch(':id')
  update(@Body() updateUserManageDto: UpdateUserDto) {
    return this.userManageService.updateUser(updateUserManageDto);
  }

  @Delete(':id')
  remove(@Body() request: FindOneUserDto) {
    return this.userManageService.deleteUser(request);
  }
}
