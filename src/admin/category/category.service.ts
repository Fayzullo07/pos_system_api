import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './schemas/category.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel(Category.name)
        private categoryModel: mongoose.Model<Category>
    ) { }

    async findAll(): Promise<Category[]> {
        const users = await this.categoryModel.find();
        return users;
    }

    async create(category: Category): Promise<Category> {
        try {
            const res = await this.categoryModel.create(category);
            return res;

        } catch (error) {
            // if (error.name === 'ValidationError') {
            // Mongoose validation error
            throw new BadRequestException({
                message: 'Validation failed',
                errors: error,
            });
            // }
            // throw error; // Rethrow other errors
        }
    }

    async findById(id: string): Promise<Category> {
        // if (id.length < 5) {
        //     throw new BadRequestException({
        //         message: 'Invalid ID length',
        //         details: 'The provided ID is too short.',
        //     });
        // }
        try {
            const categories = await this.categoryModel.findById(id);
            if (categories) {
                return categories;
            } else {
                throw new NotFoundException({
                    message: 'Category not found',
                    details: `No category found with ID: ${id}`,
                });
            }
        } catch (error) {
            throw new NotFoundException({
                message: 'Category not found',
                details: `No category found with ID: ${id}`,
            });
        }
    }

    async updateById(id: string, user: Category): Promise<Category> {
        return await this.categoryModel.findByIdAndUpdate(id, user, {
            new: true,
            runValidators: true
        });
    }

    async deleteById(id: string): Promise<Category> {
        try {
            const category = await this.categoryModel.findById(id);
            if (category) {
                await this.categoryModel.findByIdAndDelete(id);
                return category
            } else {
                throw new NotFoundException({
                    message: 'Category not found',
                    details: `No category found with ID: ${id}`,
                });
            }
            return
        } catch (error) {
            throw new NotFoundException({
                message: 'Category not found',
                details: `No category found with ID: ${id}`,
            });
        }

    }
}
