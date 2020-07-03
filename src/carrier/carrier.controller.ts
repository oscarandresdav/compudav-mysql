import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { Carrier } from './carrier.entity';
import { CarrierService } from './carrier.service';

@Controller('carrier')
export class CarrierController {
    constructor(private readonly carrierService: CarrierService) { }

    @Get()
    async findAll(@Res() res) {
        const carriers = await this.carrierService.findAll();
        return res.status(HttpStatus.OK).json(carriers);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const carrier = await this.carrierService.findOne(id);
        if (!carrier) {
            throw new NotFoundException('Carrier does not exist!');
        }
        return res.status(HttpStatus.OK).json(carrier);
    }

    @Post()
    async create(@Res() res, @Body() carrier) {
        const createdCarrier = await this.carrierService.create(carrier);
        return res.status(HttpStatus.CREATED).json({
            message: 'Carrier has been submitted successfully!',
            post: createdCarrier,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() carrier: Carrier
    ) {
        const updatedCarrier = await this.carrierService.update(id, carrier);
        if (!updatedCarrier) {
            throw new NotFoundException('Carrier does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Carrier has been successfully updated',
            post: updatedCarrier,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedCarrier = await this.carrierService.remove(id);
        if (!removedCarrier) {
            throw new NotFoundException('Carrier does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Carrier has been deleted',
            post: removedCarrier,
        });
    }
}
