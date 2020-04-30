import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';
import { UnitMeasurementService } from './unit-measurement.service';
import { UnitMeasurement } from './unit-measurement.entity';

@Controller('unit-measurement')
export class UnitMeasurementController {
    constructor(private readonly measurementService: UnitMeasurementService) { }

    @Get()
    async findAll(@Res() res) {
        const measurements = await this.measurementService.findAll();
        return res.status(HttpStatus.OK).json(measurements);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const measurement = await this.measurementService.findOne(id);
        if (!measurement) {
            throw new NotFoundException('Unit of measurement does not exist!');
        }
        return res.status(HttpStatus.OK).json(measurement);
    }

    @Post()
    async create(@Res() res, @Body() measurement) {
        const createdMeasurement = await this.measurementService.create(measurement);
        return res.status(HttpStatus.CREATED).json({
            message: "Unit of measurement has been submitted successfully!",
            post: createdMeasurement,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() measurement: UnitMeasurement
    ) {
        const updatedMeasurement = await this.measurementService.update(id, measurement);
        if (!updatedMeasurement) {
            throw new NotFoundException('Unit of measurement does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Unit of measurement has been successfully updated',
            post: updatedMeasurement,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedMeasurement = await this.measurementService.remove(id);
        if (!removedMeasurement) {
            throw new NotFoundException('Unit of measurement does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Unit of measurement has been deleted',
            post: removedMeasurement,
        });
    }
}
