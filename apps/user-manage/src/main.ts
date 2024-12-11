import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { USER_MANAGEMENT_PACKAGE_NAME } from 'proto/user-manage';
import { join } from 'path';
import { UsersModule } from './users/users.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UsersModule,
    {
      transport: Transport.GRPC,
      options: {
        package: USER_MANAGEMENT_PACKAGE_NAME,
        protoPath: join(process.cwd(), '/proto/user-manage.proto'),
      },
    },
  );
  await app.listen();
}
bootstrap();
