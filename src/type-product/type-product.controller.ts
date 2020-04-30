import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';
import { TypeProductService } from './type-product.service';
import { TypeProduct } from './type-product.entity';

@Controller('type-product')
export class TypeProductController {
    constructor(private readonly typeProductService: TypeProductService) { }

    @Get()
    async findAll(@Res() res) {
        const typeProducts = await this.typeProductService.findAll();
        return res.status(HttpStatus.OK).json(typeProducts);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const typeProduct = await this.typeProductService.findOne(id);
        if (!typeProduct) {
            throw new NotFoundException('Type of product does not exist!');
        }
        return res.status(HttpStatus.OK).json(typeProduct);
    }

    @Post()
    async create(@Res() res, @Body() typeProduct) {
        const createdTypeProduct = await this.typeProductService.create(typeProduct);
        return res.status(HttpStatus.CREATED).json({
            message: "Type of product has been submitted successfully!",
            post: createdTypeProduct,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() typeProduct: TypeProduct
    ) {
        const updatedTypeProduct = await this.typeProductService.update(id, typeProduct);
        if (!updatedTypeProduct) {
            throw new NotFoundException('Type of product does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Type of product has been successfully updated',
            post: updatedTypeProduct,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedTypeProduct = await this.typeProductService.remove(id);
        if (!removedTypeProduct) {
            throw new NotFoundException('Type of product does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Type of product has been deleted',
            post: removedTypeProduct,
        });
    }
}
