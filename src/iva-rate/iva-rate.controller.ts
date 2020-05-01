import { Controller, Get, Res, Param, NotFoundException, HttpStatus, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { IvaRate } from './iva-rate.entity';
import { IvaRateService } from './iva-rate.service';

@Controller('iva-rate')
export class IvaRateController {
    constructor(private readonly ivaRateService: IvaRateService) { }

    @Get()
    async findAll(@Res() res) {
        const ivaRates = await this.ivaRateService.findAll();
        return res.status(HttpStatus.OK).json(ivaRates);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const ivaRate = await this.ivaRateService.findOne(id);
        if (!ivaRate) {
            throw new NotFoundException('IVA rate does not exist!');
        }
        return res.status(HttpStatus.OK).json(ivaRate);
    }

    @Post()
    async create(@Res() res, @Body() ivaRate) {
        const createdIvaRate = await this.ivaRateService.create(ivaRate);
        return res.status(HttpStatus.CREATED).json({
            message: "IVA rate has been submitted successfully!",
            post: createdIvaRate,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() ivaRate: IvaRate
    ) {
        const updatedIvaRate = await this.ivaRateService.update(id, ivaRate);
        if (!updatedIvaRate) {
            throw new NotFoundException('IVA rate does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'IVA rate has been successfully updated',
            post: updatedIvaRate,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedIvaRate = await this.ivaRateService.remove(id);
        if (!removedIvaRate) {
            throw new NotFoundException('IVA rate does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'IVA rate has been deleted',
            post: removedIvaRate,
        });
    }
}
