import { Module } from '@nestjs/common';
import { CashBackService } from './cash-back.service';

@Module({
  providers: [CashBackService]
})
export class CashBackModule {}
