import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from 'src/admin/category/schemas/category.schema';

@Controller('/menu/category')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Get()
    async getAllCategory(): Promise<Category[]> {
        return this.categoryService.findAll();
    }
}
