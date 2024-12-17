import { Module } from '@nestjs/common';
import { TicketsController } from './app.controller';
import { TicketsService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [TicketsModule],
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class AppModule {}
