import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Product } from 'src/admin/product/schemas/product.schema';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name)
        private productModel: mongoose.Model<Product>
    ) { }

    async findAll(category: string): Promise<Product[]> {

        const products = await this.productModel.find({ category, isActive: true });
        return products;
    }
}
