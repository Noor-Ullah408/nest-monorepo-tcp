import { Injectable } from '@nestjs/common';
import { PrismaService } from 'apps/prisma.service';

@Injectable()
export class TicketsService {
  constructor(private prisma: PrismaService) {}
  async getTickets() {
    const tickets = await this.prisma.ticket.findMany();
    return tickets;
  }
}
