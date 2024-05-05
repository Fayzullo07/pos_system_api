import { Controller, Get } from '@nestjs/common';
import { OrderNumber } from './schemas/orderNumber.schema';
import { OrderNumbersService } from './order_numbers.service';

@Controller('/order_numbers')
export class OrderNumbersController {
    constructor(private orderNumberService: OrderNumbersService) { }

    @Get()
    async getAllOrderNumbers(): Promise<OrderNumber[]> {
        return this.orderNumberService.findAll();
    }
}
