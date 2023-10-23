import { Test, TestingModule } from '@nestjs/testing';
import { CashBackController } from './cash-back.controller';

describe('CashBackController', () => {
  let controller: CashBackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CashBackController],
    }).compile();

    controller = module.get<CashBackController>(CashBackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
