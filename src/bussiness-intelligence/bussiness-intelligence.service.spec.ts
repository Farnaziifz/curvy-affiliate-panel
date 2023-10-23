import { Test, TestingModule } from '@nestjs/testing';
import { BussinessIntelligenceService } from './bussiness-intelligence.service';

describe('BussinessIntelligenceService', () => {
  let service: BussinessIntelligenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BussinessIntelligenceService],
    }).compile();

    service = module.get<BussinessIntelligenceService>(BussinessIntelligenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
