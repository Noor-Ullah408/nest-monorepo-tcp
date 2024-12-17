import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { NotificationsService } from './notifications.service';

@Controller()
export class NotificationsController {
  constructor(
    @Inject('TICKETS') private TCPClient: ClientProxy,
    private readonly notificationsService: NotificationsService,
  ) {}
  @MessagePattern({ cmd: 'create_ticket_notification' })
  create(data) {
    console.log('Notification data', data);
  }
  findAll() {
    return this.notificationsService.getAllNotifications();
  }
}
