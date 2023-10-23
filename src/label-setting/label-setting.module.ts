import { Module } from '@nestjs/common';
import { LabelSettingService } from './label-setting.service';

@Module({
  providers: [LabelSettingService]
})
export class LabelSettingModule {}
