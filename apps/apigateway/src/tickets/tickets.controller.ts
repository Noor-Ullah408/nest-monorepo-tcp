import { Controller, Post, Body, Inject, Get } from '@nestjs/common';
import { Ticket } from '@prisma/client';
import { ClientProxy } from '@nestjs/microservices';
import { TicketsService } from './tickets.service';

@Controller('tickets')
export class TicketsController {
  constructor(
    @Inject('TICKETS') private client: ClientProxy,
    private ticketsService: TicketsService,
  ) {}
  @Post('create-ticket')
  create(@Body() createTicketDto: Ticket) {
    console.log(createTicketDto);
    const pattern = { cmd: 'create_ticket' };
    return this.client.send(pattern, createTicketDto);
  }
  @Get()
  async getTickets() {
    const tickets = await this.ticketsService.getTickets();
    return tickets;
  }
}
