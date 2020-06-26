import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    async findAll(@Res() res) {
        const products = await this.productService.findAll();
        return res.status(HttpStatus.OK).json(products);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const product = await this.productService.findOne(id);
        if (!product) {
            throw new NotFoundException('Product does not exist!');
        }
        return res.status(HttpStatus.OK).json(product);
    }

    @Post()
    async create(@Res() res, @Body() product) {
        const createdProduct = await this.productService.create(product);
        return res.status(HttpStatus.CREATED).json({
            message: 'Product has been submitted successfully!',
            post: createdProduct,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() product: Product
    ) {
        const updatedProduct = await this.productService.update(id, product);
        if (!updatedProduct) {
            throw new NotFoundException('Product does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Product has been successfully updated',
            post: updatedProduct,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedProduct = await this.productService.remove(id);
        if (!removedProduct) {
            throw new NotFoundException('Product does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Product has been deleted',
            post: removedProduct,
        });
    }
}
