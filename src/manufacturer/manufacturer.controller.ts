import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { Manufacturer } from './manufacturer.entity';
import { ManufacturerService } from './manufacturer.service';

@Controller('manufacturer')
export class ManufacturerController {
    constructor(private readonly manufacturerService: ManufacturerService) { }

    @Get()
    async findAll(@Res() res) {
        const manufacturers = await this.manufacturerService.findAll();
        return res.status(HttpStatus.OK).json(manufacturers);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const manufacturer = await this.manufacturerService.findOne(id);
        if (!manufacturer) {
            throw new NotFoundException('Manufacturer does not exist!');
        }
        return res.status(HttpStatus.OK).json(manufacturer);
    }

    @Post()
    async create(@Res() res, @Body() manufacturer) {
        const createdManufacturer = await this.manufacturerService.create(manufacturer);
        return res.status(HttpStatus.CREATED).json({
            message: 'Manufacturer has been submitted successfully!',
            post: createdManufacturer,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() manufacturer: Manufacturer
    ) {
        const updatedManufacturer = await this.manufacturerService.update(id, manufacturer);
        if (!updatedManufacturer) {
            throw new NotFoundException('Manufacturer does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Manufacturer has been successfully updated',
            post: updatedManufacturer,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedManufacturer = await this.manufacturerService.remove(id);
        if (!removedManufacturer) {
            throw new NotFoundException('Manufacturer does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Manufacturer has been deleted',
            post: removedManufacturer,
        });
    }
}
