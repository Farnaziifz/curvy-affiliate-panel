import { Test, TestingModule } from '@nestjs/testing';
import { CashBackService } from './cash-back.service';

describe('CashBackService', () => {
  let service: CashBackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CashBackService],
    }).compile();

    service = module.get<CashBackService>(CashBackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
