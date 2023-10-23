import { Test, TestingModule } from '@nestjs/testing';
import { CopounController } from './copoun.controller';

describe('CopounController', () => {
  let controller: CopounController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CopounController],
    }).compile();

    controller = module.get<CopounController>(CopounController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
