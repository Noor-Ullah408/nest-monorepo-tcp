import { Test, TestingModule } from '@nestjs/testing';
import { UserManageController } from './user-manage.controller';
import { UserManageService } from './user-manage.service';

describe('UserManageController', () => {
  let userManageController: UserManageController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserManageController],
      providers: [UserManageService],
    }).compile();

    userManageController = app.get<UserManageController>(UserManageController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userManageController.getHello()).toBe('Hello World!');
    });
  });
});
