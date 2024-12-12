import { Controller, Get } from '@nestjs/common';
import { NotificationsService } from './app.service';

@Controller()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  getHello(): string {
    return this.notificationsService.getHello();
  }
}
