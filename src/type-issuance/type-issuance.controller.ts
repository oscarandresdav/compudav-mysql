import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { TypeIssuance } from './type-issuance.entity';
import { TypeIssuanceService } from './type-issuance.service';

@Controller('type-issuance')
export class TypeIssuanceController {
    constructor(private readonly typeIssuanceService: TypeIssuanceService) { }

    @Get()
    async findAll(@Res() res) {
        const typeIssuances = await this.typeIssuanceService.findAll();
        return res.status(HttpStatus.OK).json(typeIssuances);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const typeIssuance = await this.typeIssuanceService.findOne(id);
        if (!typeIssuance) {
            throw new NotFoundException('Type of issuance does not exist!');
        }
        return res.status(HttpStatus.OK).json(typeIssuance);
    }

    @Post()
    async create(@Res() res, @Body() typeIssuance) {
        const createdTypeIssuance = await this.typeIssuanceService.create(typeIssuance);
        return res.status(HttpStatus.CREATED).json({
            message: 'Type of issuance has been submitted successfully!',
            post: createdTypeIssuance,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() typeIssuance: TypeIssuance
    ) {
        const updatedTypeIssuance = await this.typeIssuanceService.update(id, typeIssuance);
        if (!updatedTypeIssuance) {
            throw new NotFoundException('Type of issuance does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Type of issuance has been successfully updated',
            post: updatedTypeIssuance,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedTypeIssuance = await this.typeIssuanceService.remove(id);
        if (!removedTypeIssuance) {
            throw new NotFoundException('Type of issuance does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Type of issuance has been deleted',
            post: removedTypeIssuance,
        });
    }
}
