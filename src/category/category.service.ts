import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Category } from './category.entity';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category) private readonly category: Repository<Category>,
    ) { }

    async findAll(): Promise<Category[]> {
        const categories = await this.category.find();
        return categories;
    }

    async findOne(id: string): Promise<Category> {
        const category = await this.category.findOne(id);
        return category;
    }

    async create(newCategory: Category): Promise<Category> {
        const createdCategory = this.category.save(newCategory);
        return createdCategory;
    }

    async update(id: string, updateCategory: Category): Promise<any> {
        const updatedCategory = await this.category.update(id, updateCategory);
        return updatedCategory;
    }

    async remove(id: string): Promise<any> {
        const removedCategory = await this.category.delete(id);
        return removedCategory;
    }
}
