import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { cecat_categoria } from './category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(cecat_categoria)
        private readonly categoryRepository: Repository<cecat_categoria>,
    ) { }

    async findAll(): Promise<cecat_categoria[]>{
        return this.categoryRepository.find();
    }
}
