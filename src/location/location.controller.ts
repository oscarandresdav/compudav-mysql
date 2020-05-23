import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { Location } from './location.entity';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
    constructor(private readonly locationService: LocationService) { }

    @Get()
    async findAll(@Res() res) {
        const locations = await this.locationService.findAll();
        return res.status(HttpStatus.OK).json(locations);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const location = await this.locationService.findOne(id);
        if (!location) {
            throw new NotFoundException('Location does not exist!');
        }
        return res.status(HttpStatus.OK).json(location);
    }

    @Post()
    async create(@Res() res, @Body() company) {
        const createdLocation = await this.locationService.create(company);
        return res.status(HttpStatus.CREATED).json({
            message: "Location has been submitted successfully!",
            post: createdLocation,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() location: Location
    ) {
        const updatedLocation = await this.locationService.update(id, location);
        if (!updatedLocation) {
            throw new NotFoundException('Location does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Location has been successfully updated',
            post: updatedLocation,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedLocation = await this.locationService.remove(id);
        if (!removedLocation) {
            throw new NotFoundException('Location does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Location has been deleted',
            post: removedLocation,
        });
    }
}
