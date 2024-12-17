import { Test, TestingModule } from '@nestjs/testing';
import { TicketsController } from './app.controller';
import { TicketsService } from './app.service';

describe('TicketsController', () => {
  let ticketsController: TicketsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TicketsController],
      providers: [TicketsService],
    }).compile();

    ticketsController = app.get<TicketsController>(TicketsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ticketsController.getHello()).toBe('Hello World!');
    });
  });
});
