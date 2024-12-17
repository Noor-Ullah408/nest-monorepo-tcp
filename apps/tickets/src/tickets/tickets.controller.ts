import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { TicketsService } from './tickets.service';
import { Ticket } from '@prisma/client';

@Controller()
export class TicketsController {
  constructor(
    @Inject('TICKETS') private TCPClient: ClientProxy,
    private readonly ticketsService: TicketsService,
  ) {}
  @MessagePattern({ cmd: 'create_ticket' })
  async create(@Payload() createTicketDto: Ticket) {
    console.log('Tickets Data: ', createTicketDto);
    const ticket = await this.ticketsService.createTicket(createTicketDto);
    const pattern = { cmd: 'create_ticket_notification' };
    await this.publishEvent(pattern, createTicketDto);
    return ticket;
  }
  async publishEvent(pattern: { cmd: string }, payload: Ticket) {
    return this.TCPClient.emit(pattern, payload);
  }
}
