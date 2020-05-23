import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TypeProduct } from './type-product.entity';

@Injectable()
export class TypeProductService {
    constructor (
        @InjectRepository(TypeProduct) private readonly typeProduct: Repository<TypeProduct>
    ) { }

    async findAll(): Promise<TypeProduct[]> {
        const typeProducts = await this.typeProduct.find();
        return typeProducts;
    }

    async findOne(id: string): Promise<TypeProduct> {
        const typeProduct = await this.typeProduct.findOne(id);
        return typeProduct;
    }

    async create(newTypeProduct: TypeProduct): Promise<TypeProduct> {
        const createdTypeProduct = this.typeProduct.save(newTypeProduct);
        return createdTypeProduct;
    }

    async update(id: string, updateTypeProduct: TypeProduct): Promise<any> {
        const updatedTypeProduct = await this.typeProduct.update(id, updateTypeProduct);
        return updatedTypeProduct;
    }

    async remove(id: string): Promise<any> {
        const removedTypeProduct = await this.typeProduct.delete(id);
        return removedTypeProduct;
    }
}
