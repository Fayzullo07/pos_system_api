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
        const categories = await this.categoryModel.find();
        return categories;
    }

    async create(category: Category): Promise<Category> {
        try {
            const res = await this.categoryModel.create(category);
            return res;

        } catch (error) {
            throw new BadRequestException({
                message: 'Validation failed',
                errors: error,
            });
        }
    }

    async findById(id: string): Promise<Category> {
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

    async updateById(id: string, category: Category): Promise<Category> {
        return await this.categoryModel.findByIdAndUpdate(id, category, {
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
        } catch (error) {
            throw new NotFoundException({
                message: 'Category not found',
                details: `No category found with ID: ${id}`,
            });
        }

    }
}
