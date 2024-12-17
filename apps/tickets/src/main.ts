import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.connectMicroservice({
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: ['amqp://localhost:5672'],
  //     queue: 'tickets',
  //     noAck: false,
  //     prefetchCount: 1,
  //     queueOptions: {
  //       durable: false,
  //     },
  //   },
  // });
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 3003,
    },
  });
  await app.startAllMicroservices();
  await app.listen(3002);
}
bootstrap();
