import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private products = [
        {
            id: 1,
            name: 'Apple',
            price: 100,
            quantity: 10
        },
        {
            id: 2,
            name: 'Banana',
            price: 200,
            quantity: 20
        },
        {
            id: 3,
            name: 'Orange',
            price: 300,
            quantity: 30
        },
        {
            id: 4,
            name: 'Pineapple',
            price: 400,
            quantity: 40
        },
        {
            id: 5,
            name: 'Mango',
            price: 500,
            quantity: 50
        }
    ];
    getProductsArray(): any[] {
        return this.products;
    }
    getProductById(id: number): any {
        return this.products.find(product => product.id === id);
    }
    createProduct(product: any): any {
        this.products.push(product);
        return product;
    }
    updateProduct(id: number, product: any): any {
        const index = this.products.findIndex(product => product.id === id);
        this.products[index] = product;
        return product;
    }
}
