import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from 'src/admin/product/schemas/product.schema';

@Controller('/menu/product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Get()
    async getAllProduct(
        @Query('category')
        category: string
    ): Promise<Product[]> {
        return this.productService.findAll(category);
    }
}
