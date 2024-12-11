import { Module } from '@nestjs/common';
import { UserManageService } from './user-manage.service';
import { UserManageController } from './user-manage.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { USER_MANAGEMENT_PACKAGE_NAME } from 'proto/user-manage';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: USER_MANAGEMENT_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          package: USER_MANAGEMENT_PACKAGE_NAME,
          protoPath: join(process.cwd(), '/proto/user-manage.proto'),
        },
      },
    ]),
  ],
  controllers: [UserManageController],
  providers: [UserManageService],
})
export class UserManageModule {}
