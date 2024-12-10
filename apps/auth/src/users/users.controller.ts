import { Body, Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  LoginServiceController,
  LoginServiceControllerMethods,
  Token,
  UserDto,
} from 'proto/auth';
import { Observable } from 'rxjs';

@Controller()
@LoginServiceControllerMethods()
export class UsersController implements LoginServiceController {
  constructor(private readonly usersService: UsersService) {}

  login(@Body() request: UserDto): Promise<Token> | Observable<Token> | Token {
    return this.usersService.login(request);
  }
}
