import { Test, TestingModule } from '@nestjs/testing';
import { LabelSettingService } from './label-setting.service';

describe('LabelSettingService', () => {
  let service: LabelSettingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabelSettingService],
    }).compile();

    service = module.get<LabelSettingService>(LabelSettingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
