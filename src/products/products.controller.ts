import { Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {}
    @Get()
    getProducts() {
        return this.productsService.getProductsArray();
    }
    @Get(':id')
    getProductById(@Param('id') id: string) {
        return this.productsService.getProductById(Number(id));
    }
}
