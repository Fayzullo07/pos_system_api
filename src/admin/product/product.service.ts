import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import mongoose from 'mongoose';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name)
        private productModel: mongoose.Model<Product>
    ) { }

    async findAll(): Promise<Product[]> {
        const products = await this.productModel.find();
        return products;
    }

    async create(category: Product): Promise<Product> {
        try {
            const res = await this.productModel.create(category);
            return res;

        } catch (error) {
            throw new BadRequestException({
                message: 'Validation failed',
                errors: error,
            });
        }
    }

    async findById(id: string): Promise<Product> {
        try {
            const product = await this.productModel.findById(id);
            if (product) {
                return product;
            } else {
                throw new NotFoundException({
                    message: 'Product not found',
                    details: `No Product found with ID: ${id}`,
                });
            }
        } catch (error) {
            throw new NotFoundException({
                message: 'Product not found',
                details: `No Product found with ID: ${id}`,
            });
        }
    }

    async updateById(id: string, product: Product): Promise<Product> {
        return await this.productModel.findByIdAndUpdate(id, product, {
            new: true,
            runValidators: true
        });
    }

    async deleteById(id: string): Promise<Product> {
        try {
            const product = await this.productModel.findById(id);
            if (product) {
                await this.productModel.findByIdAndDelete(id);
                return product
            } else {
                throw new NotFoundException({
                    message: 'Product not found',
                    details: `No Product found with ID: ${id}`,
                });
            }
        } catch (error) {
            throw new NotFoundException({
                message: 'Product not found',
                details: `No Product found with ID: ${id}`,
            });
        }

    }
}
