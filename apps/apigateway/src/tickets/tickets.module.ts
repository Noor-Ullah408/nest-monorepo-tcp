import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PrismaService } from 'apps/prisma.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TICKETS',
        transport: Transport.TCP,
        options: {
          port: 3003,
        },
      },
    ]),
  ],
  controllers: [TicketsController],
  providers: [TicketsService, PrismaService],
})
export class TicketsModule {}
