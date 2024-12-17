import { Controller, Get, Post, Body } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Notification } from '@prisma/client';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('create-notification')
  createNotification(@Body() createNotificationDto: Notification) {
    return this.notificationsService.createNotification(createNotificationDto);
  }

  @Get()
  findAllNotifications() {
    return this.notificationsService.findAllNotifications();
  }
}
