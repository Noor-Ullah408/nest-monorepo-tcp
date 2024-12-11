import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserManageModule } from './user-manage/user-manage.module';

@Module({
  imports: [AuthModule, UserManageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
