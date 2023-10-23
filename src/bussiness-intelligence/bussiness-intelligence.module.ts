import { Module } from '@nestjs/common';
import { BussinessIntelligenceController } from './bussiness-intelligence.controller';

@Module({
  controllers: [BussinessIntelligenceController]
})
export class BussinessIntelligenceModule {}
