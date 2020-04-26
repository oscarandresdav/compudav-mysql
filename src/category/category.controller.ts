import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { cecat_categoria } from './category.entity';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Get()
    findAll(): Promise<cecat_categoria[]>{
        return this.categoryService.findAll();
    }
}
