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

@Module({
  imports: [LoginModule, ClientModule, CategoryModule, DiscountModule],
  controllers: [AppController, LoginController, DiscountController],
  providers: [AppService, LoginService, ClientService, CategoryService],
})
export class AppModule {}
