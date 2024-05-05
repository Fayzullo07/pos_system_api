import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './schemas/category.schema';

@Controller('/admin/category')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Get()
    async getAllCategory(): Promise<Category[]> {
        return this.categoryService.findAll();
    }

    @Post()
    async createCategory(
        @Body()
        category
    ): Promise<Category> {
        return this.categoryService.create(category);
    }

    @Get(':id')
    async getCategory(
        @Param('id')
        id: string
    ): Promise<Category> {
        return this.categoryService.findById(id);
    }

    @Put(':id')
    async updateUser(
        @Param('id')
        id: string,

        @Body()
        category
    ): Promise<Category> {
        return this.categoryService.updateById(id, category);
    }

    @Delete(':id')
    async deleteUser(
        @Param('id')
        id: string
    ): Promise<Category> {
        return this.categoryService.deleteById(id);
    }
}
