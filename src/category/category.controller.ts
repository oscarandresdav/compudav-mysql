import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { Category } from './category.entity';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Get()
    async findAll(@Res() res) {
        const categories = await this.categoryService.findAll();
        return res.status(HttpStatus.OK).json(categories);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const category = await this.categoryService.findOne(id);
        if (!category) {
            throw new NotFoundException('Category does not exist!');
        }
        return res.status(HttpStatus.OK).json(category);
    }

    @Post()
    async create(@Res() res, @Body() category) {
        const createdCategory = await this.categoryService.create(category);
        return res.status(HttpStatus.CREATED).json({
            message: 'Category has been submitted successfully!',
            post: createdCategory,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() category: Category
    ) {
        const updatedCategory = await this.categoryService.update(id, category);
        if (!updatedCategory) {
            throw new NotFoundException('Category does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Category has been successfully updated',
            post: updatedCategory,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedCategory = await this.categoryService.remove(id);
        if (!removedCategory) {
            throw new NotFoundException('Category does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Category has been deleted',
            post: removedCategory,
        });
    }
}
