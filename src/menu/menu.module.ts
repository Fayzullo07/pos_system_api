import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ChefSchema } from '../chef/schemas/chef.schema';
import { OrderNumberSchema } from '../order_numbers/schemas/orderNumber.schema';

@Module({
  controllers: [MenuController],
  providers: [MenuService],
  imports: [
    CategoryModule,
    ProductModule,
    MongooseModule.forFeature([
      { name: 'Chef', schema: ChefSchema },
      { name: 'OrderNumber', schema: OrderNumberSchema }
    ]),
  ]
})
export class MenuModule {}
