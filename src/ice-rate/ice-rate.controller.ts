import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { IceRate } from './ice-rate.entity';
import { IceRateService } from './ice-rate.service';

@Controller('ice-rate')
export class IceRateController {
    constructor(private readonly iceRateService: IceRateService) { }

    @Get()
    async findAll(@Res() res) {
        const iceRates = await this.iceRateService.findAll();
        return res.status(HttpStatus.OK).json(iceRates);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const iceRate = await this.iceRateService.findOne(id);
        if (!iceRate) {
            throw new NotFoundException('ICE rate does not exist!');
        }
        return res.status(HttpStatus.OK).json(iceRate);
    }

    @Post()
    async create(@Res() res, @Body() iceRate) {
        const createdIceRate = await this.iceRateService.create(iceRate);
        return res.status(HttpStatus.CREATED).json({
            message: 'ICE rate has been submitted successfully!',
            post: createdIceRate,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() iceRate: IceRate
    ) {
        const updatedIceRate = await this.iceRateService.update(id, iceRate);
        if (!updatedIceRate) {
            throw new NotFoundException('ICE rate does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'ICE rate has been successfully updated',
            post: updatedIceRate,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedIceRate = await this.iceRateService.remove(id);
        if (!removedIceRate) {
            throw new NotFoundException('ICE rate does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'ICE rate has been deleted',
            post: removedIceRate,
        });
    }
}
