import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { User } from '@prisma/client';
import { PrismaService } from 'apps/prisma.service';
import {
  AUTH_PACKAGE_NAME,
  LOGIN_SERVICE_NAME,
  LoginServiceClient,
  Token,
  UserDto,
} from 'proto/auth';
import { Observable } from 'rxjs';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService implements OnModuleInit {
  private usersService: LoginServiceClient;
  //We inject the gRPC with the required Service Name in the constructor
  // along with our PrismaService
  constructor(
    @Inject(AUTH_PACKAGE_NAME) private client: ClientGrpc,
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
  async findUser(data: UserDto): Promise<User | null> {
    const user: User | null = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    return user;
  }
  async findUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }
  async validateUser(data: UserDto) {
    const user = await this.findUser(data);
    const checkPassword = await bcrypt.compare(data.password, user.password);
    if (checkPassword) {
      return true;
    }
    return false;
  }
}
