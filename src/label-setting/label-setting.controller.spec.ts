import { Test, TestingModule } from '@nestjs/testing';
import { LabelSettingController } from './label-setting.controller';

describe('LabelSettingController', () => {
  let controller: LabelSettingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LabelSettingController],
    }).compile();

    controller = module.get<LabelSettingController>(LabelSettingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
