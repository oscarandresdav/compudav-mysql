import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { TypeIdentification } from './type-identification.entity';
import { TypeIdentificationService } from './type-identification.service';

@Controller('type-identification')
export class TypeIdentificationController {
    constructor(private readonly typeIdentificationService: TypeIdentificationService) { }

    @Get()
    async findAll(@Res() res) {
        const typeIdentifications = await this.typeIdentificationService.findAll();
        return res.status(HttpStatus.OK).json(typeIdentifications);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const typeIdentification = await this.typeIdentificationService.findOne(id);
        if (!typeIdentification) {
            throw new NotFoundException('Type of identification does not exist!');
        }
        return res.status(HttpStatus.OK).json(typeIdentification);
    }

    @Post()
    async create(@Res() res, @Body() typeIdentification) {
        const createdTypeIdentification = await this.typeIdentificationService.create(typeIdentification);
        return res.status(HttpStatus.CREATED).json({
            message: 'Type of identification has been submitted successfully!',
            post: createdTypeIdentification,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() typeIdentification: TypeIdentification
    ) {
        const updatedTypeIdentification = await this.typeIdentificationService.update(id, typeIdentification);
        if (!updatedTypeIdentification) {
            throw new NotFoundException('Type of identification does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Type of identification has been successfully updated',
            post: updatedTypeIdentification,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedTypeIdentification = await this.typeIdentificationService.remove(id);
        if (!removedTypeIdentification) {
            throw new NotFoundException('Type of identification does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Type of identification has been deleted',
            post: removedTypeIdentification,
        });
    }
}
