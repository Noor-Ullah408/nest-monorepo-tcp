import { Module } from '@nestjs/common';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [TicketsModule],
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
