import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Chef } from './schemas/chef.schema';
import { OrderNumber } from 'src/order_numbers/schemas/orderNumber.schema';

@Injectable()
export class ChefService {
    constructor(
        @InjectModel(Chef.name)
        private chefModel: mongoose.Model<Chef>,
        @InjectModel(OrderNumber.name)
        private orderNumberModel: mongoose.Model<OrderNumber>
    ) { }

    async findAll(): Promise<Chef[]> {
        const orders = await this.chefModel.find({ isActive: true });
        return orders;
    }

    async findById(id: string): Promise<Chef> {
        try {
            const chef = await this.chefModel.findById(id);
            if (chef) {
                return chef;
            } else {
                throw new NotFoundException({
                    message: 'Chef not found',
                    details: `No chef found with ID: ${id}`,
                });
            }
        } catch (error) {
            throw new NotFoundException({
                message: 'Chef not found',
                details: `No chef found with ID: ${id}`,
            });
        }
    }

    async updateById(id: string, data: any): Promise<any> {
        const { isFinished, isActive, orderNumber } = data;
        const orderData = await this.orderNumberModel.findOneAndUpdate({ orderNumber }, { isFinished, isActive }, {
            new: true,
            runValidators: true
        });
        const chefData = await this.chefModel.findByIdAndUpdate(id, { isFinished, isActive }, {
            new: true,
            runValidators: true
        });

        return [chefData, orderData]
    }
}
