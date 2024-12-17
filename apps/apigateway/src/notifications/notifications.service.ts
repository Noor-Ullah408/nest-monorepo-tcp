import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Notification } from '@prisma/client';

@Injectable()
export class NotificationsService {
  constructor(@Inject('NOTIFICATIONS') private client: ClientProxy) {}
  createNotification(createNotificationDto: Notification) {
    const pattern = { cmd: 'create_notification' };
    return this.client.send(pattern, createNotificationDto);
  }
  findAllNotifications() {
    const pattern = { cmd: 'find_all_notifications' };
    return this.client.send(pattern, '');
  }
}
