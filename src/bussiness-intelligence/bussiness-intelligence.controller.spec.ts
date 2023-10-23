import { Test, TestingModule } from '@nestjs/testing';
import { BussinessIntelligenceController } from './bussiness-intelligence.controller';

describe('BussinessIntelligenceController', () => {
  let controller: BussinessIntelligenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BussinessIntelligenceController],
    }).compile();

    controller = module.get<BussinessIntelligenceController>(BussinessIntelligenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
