import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';

@Controller('/admin/product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Get()
    async getAllProduct(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Post()
    async createProduct(
        @Body()
        product
    ): Promise<Product> {
        return this.productService.create(product);
    }

    @Get(':id')
    async getProduct(
        @Param('id')
        id: string
    ): Promise<Product> {
        return this.productService.findById(id);
    }

    @Put(':id')
    async updateProduct(
        @Param('id')
        id: string,

        @Body()
        product
    ): Promise<Product> {
        return this.productService.updateById(id, product);
    }

    @Delete(':id')
    async deleteProduct(
        @Param('id')
        id: string
    ): Promise<Product> {
        return this.productService.deleteById(id);
    }
}
