import { Controller, Get } from '@nestjs/common';
import { TicketsService } from './app.service';

@Controller()
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get()
  getHello(): string {
    return this.ticketsService.getHello();
  }
}
