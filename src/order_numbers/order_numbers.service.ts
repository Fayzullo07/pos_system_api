import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { OrderNumber } from './schemas/orderNumber.schema';

@Injectable()
export class OrderNumbersService {
    constructor(
        @InjectModel(OrderNumber.name)
        private orderNumberModel: mongoose.Model<OrderNumber>
    ) { }

    async findAll(): Promise<OrderNumber[]> {
        const order_numbers = await this.orderNumberModel.find({ isActive: true });
        return order_numbers;
    }
}
