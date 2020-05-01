import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private readonly product: Repository<Product>,
    ) { }

    async findAll(): Promise<Product[]> {
        const products = await this.product.find();
        return products;
    }

    async findOne(id: string): Promise<Product> {
        const product = await this.product.findOne(id);
        return product;
    }

    async create(newProduct: Product): Promise<Product> {
        const createdProduct = this.product.save(newProduct);
        return createdProduct;
    }

    async update(id: string, updateProduct: Product): Promise<any> {
        const updatedProduct = await this.product.update(id, updateProduct);
        return updatedProduct;
    }

    async remove(id: string): Promise<any> {
        const removedProduct = await this.product.delete(id);
        return removedProduct;
    }
}
