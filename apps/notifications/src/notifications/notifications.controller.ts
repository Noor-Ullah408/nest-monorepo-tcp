import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern } from '@nestjs/microservices';
import { NotificationsService } from './notifications.service';

@Controller()
export class NotificationsController {
  constructor(
    @Inject('TICKETS') private RMQClient: ClientProxy,
    private readonly notificationsService: NotificationsService,
  ) {}
  @EventPattern('create_ticket_notification')
  create(data) {
    console.log(data);
  }
  findAll() {
    return this.notificationsService.getAllNotifications();
  }
}
