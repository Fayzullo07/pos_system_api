import { Module } from '@nestjs/common';
import { ChefService } from './chef.service';
import { ChefController } from './chef.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChefSchema } from './schemas/chef.schema';
import { OrderNumberSchema } from 'src/order_numbers/schemas/orderNumber.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Chef', schema: ChefSchema },
    { name: 'OrderNumber', schema: OrderNumberSchema }
  ])],
  providers: [ChefService],
  controllers: [ChefController]
})
export class ChefModule { }
