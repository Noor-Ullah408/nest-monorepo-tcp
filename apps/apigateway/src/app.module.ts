import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserManageModule } from './user-manage/user-manage.module';
import { NotificationsModule } from './notifications/notifications.module';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [AuthModule, UserManageModule, NotificationsModule, TicketsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
