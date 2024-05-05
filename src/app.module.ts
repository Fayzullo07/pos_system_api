import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { ChefModule } from './chef/chef.module';
import { OrderNumbersModule } from './order_numbers/order_numbers.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    AuthModule,
    UserModule,
    AdminModule,
    ChefModule,
    OrderNumbersModule,
    MenuModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
