import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Chef } from 'src/chef/schemas/chef.schema';
import { OrderNumber } from 'src/order_numbers/schemas/orderNumber.schema';

@Injectable()
export class MenuService {
    constructor(
        @InjectModel(Chef.name)
        private chefModel: mongoose.Model<Chef>,
        @InjectModel(OrderNumber.name)
        private orderNumberModel: mongoose.Model<OrderNumber>
    ) { }
    async create(data: any): Promise<any> {
        try {
            const { orderNumber } = data;
            const resChef = await this.chefModel.create(data);

            const resOrderNumber = await this.orderNumberModel.create({ orderNumber })

            return [resChef, resOrderNumber]

        } catch (error) {
            throw new BadRequestException({
                message: 'Validation failed',
                errors: error,
            });
        }
    }
}
