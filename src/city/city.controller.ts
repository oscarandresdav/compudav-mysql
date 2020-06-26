import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { City } from './city.entity';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
    constructor(private readonly cityService: CityService) { }

    @Get()
    async findAll(@Res() res) {
        const cities = await this.cityService.findAll();
        return res.status(HttpStatus.OK).json(cities);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const city = await this.cityService.findOne(id);
        if (!city) {
            throw new NotFoundException('City does not exist!');
        }
        return res.status(HttpStatus.OK).json(city);
    }

    @Post()
    async create(@Res() res, @Body() city) {
        const createdCity = await this.cityService.create(city);
        return res.status(HttpStatus.CREATED).json({
            message: 'City has been submitted successfully!',
            post: createdCity,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() city: City
    ) {
        const updatedCity = await this.cityService.update(id, city);
        if (!updatedCity) {
            throw new NotFoundException('City does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'City has been successfully updated',
            post: updatedCity,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedCity = await this.cityService.remove(id);
        if (!removedCity) {
            throw new NotFoundException('City does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'City has been deleted',
            post: removedCity,
        });
    }
}
