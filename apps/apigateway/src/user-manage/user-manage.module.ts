import { Module } from '@nestjs/common';
import { UserManageService } from './user-manage.service';
import { UserManageController } from './user-manage.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { USER_MANAGEMENT_PACKAGE_NAME } from 'proto/user-manage';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: USER_MANAGEMENT_PACKAGE_NAME,
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'users-manage',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [UserManageController],
  providers: [UserManageService],
})
export class UserManageModule {}
