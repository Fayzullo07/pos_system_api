import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Category } from 'src/admin/category/schemas/category.schema';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel(Category.name)
        private categoryModel: mongoose.Model<Category>
    ) { }

    async findAll(): Promise<Category[]> {
        const categories = await this.categoryModel.find({ isActive: true });
        return categories;
    }
}
