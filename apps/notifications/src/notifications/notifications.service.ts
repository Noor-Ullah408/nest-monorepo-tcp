import { Injectable } from '@nestjs/common';
import { PrismaService } from 'apps/prisma.service';

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}
  async createNotification(message) {}
  async getAllNotifications() {
    const allNotifications = await this.prisma.notification.findMany();
    return allNotifications;
  }
}
