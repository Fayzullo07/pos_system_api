import { Module } from '@nestjs/common';
import { OrderNumbersService } from './order_numbers.service';
import { OrderNumbersController } from './order_numbers.controller';
import { OrderNumberSchema } from './schemas/orderNumber.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'OrderNumber', schema: OrderNumberSchema }])],
  providers: [OrderNumbersService],
  controllers: [OrderNumbersController]
})
export class OrderNumbersModule { }
