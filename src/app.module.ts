import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginService } from './login/login.service';
import { LoginController } from './login/login.controller';
import { LoginModule } from './login/login.module';
import { ClientService } from './client/client.service';
import { ClientModule } from './client/client.module';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';
import { DiscountController } from './discount/discount.controller';
import { DiscountModule } from './discount/discount.module';
import { ReportsService } from './reports/reports.service';
import { ReportsModule } from './reports/reports.module';
import { LabelSettingController } from './label-setting/label-setting.controller';
import { LabelSettingModule } from './label-setting/label-setting.module';
import { BussinessIntelligenceService } from './bussiness-intelligence/bussiness-intelligence.service';
import { BussinessIntelligenceModule } from './bussiness-intelligence/bussiness-intelligence.module';
import { CommentsController } from './comments/comments.controller';
import { CommentsModule } from './comments/comments.module';
import { CopounService } from './copoun/copoun.service';
import { CopounController } from './copoun/copoun.controller';
import { CopounModule } from './copoun/copoun.module';

@Module({
  imports: [LoginModule, ClientModule, CategoryModule, DiscountModule, ReportsModule, LabelSettingModule, BussinessIntelligenceModule, CommentsModule, CopounModule],
  controllers: [AppController, LoginController, DiscountController, LabelSettingController, CommentsController, CopounController],
  providers: [AppService, LoginService, ClientService, CategoryService, ReportsService, BussinessIntelligenceService, CopounService],
})
export class AppModule {}
