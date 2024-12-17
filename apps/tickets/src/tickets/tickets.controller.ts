import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { TicketsService } from './tickets.service';
import { Ticket } from '@prisma/client';

@Controller()
export class TicketsController {
  constructor(
    @Inject('TICKETS') private RMQClient: ClientProxy,
    private readonly ticketsService: TicketsService,
  ) {}
  @MessagePattern({ cmd: 'create_ticket' })
  async create(@Payload() createTicketDto: Ticket) {
    const ticket = await this.ticketsService.createTicket(createTicketDto);
    await this.publishEvent(createTicketDto);
    return ticket;
  }
  async publishEvent(payload: Ticket) {
    return this.RMQClient.emit('create_ticket_notification', payload);
  }
}
