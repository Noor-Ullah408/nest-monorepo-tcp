export class CreateNotificationDto {
  id: number;
  userId: number;
  message: string;
  status: string;
}

export class UpdateNotificationDto extends CreateNotificationDto {}
