import { Module } from '@nestjs/common';
import { NotificationsController } from './app.controller';
import { NotificationsService } from './app.service';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [NotificationsModule],
  controllers: [NotificationsController],
  providers: [NotificationsService],
})
export class AppMoudle {}
