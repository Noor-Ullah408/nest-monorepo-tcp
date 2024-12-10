import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { PrismaService } from 'apps/prisma.service';
import {
  LOGIN_SERVICE_NAME,
  LoginServiceClient,
  Token,
  UserDto,
} from 'proto/auth';
import { Observable } from 'rxjs';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService implements OnModuleInit {
  private usersService: LoginServiceClient;
  //We inject the gRPC with the required Service Name in the constructor
  // along with our PrismaService
  constructor(
    @Inject(LOGIN_SERVICE_NAME) private client: ClientGrpc,
    private prisma: PrismaService,
  ) {}
  //This initializes our gRPC client with the correct service names
  onModuleInit() {
    this.usersService =
      this.client.getService<LoginServiceClient>(LOGIN_SERVICE_NAME);
  }
  //This is the gRPC service we use
  login(user: UserDto): Observable<Token> {
    return this.usersService.login(user);
  }
  //Non gRPC method to find the user or return null
  async findUser(data: UserDto): Promise<User | null> {
    const user: User | null = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    return user;
  }
  //Method to validate user and return a boolean
  async validateUser(data: UserDto) {
    const user = await this.findUser(data);
    const checkPassword = await bcrypt.compare(data.password, user.password);
    if (checkPassword) {
      return true;
    }
    return false;
  }
}
