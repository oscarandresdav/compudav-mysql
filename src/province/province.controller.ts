import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { Province } from './province.entity';
import { ProvinceService } from './province.service';

@Controller('province')
export class ProvinceController {
    constructor(private readonly provinceService: ProvinceService) { }

    @Get()
    async findAll(@Res() res) {
        const provinces = await this.provinceService.findAll();
        return res.status(HttpStatus.OK).json(provinces);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const province = await this.provinceService.findOne(id);
        if (!province) {
            throw new NotFoundException('Province does not exist!');
        }
        return res.status(HttpStatus.OK).json(province);
    }

    @Post()
    async create(@Res() res, @Body() province) {
        const createdProvince = await this.provinceService.create(province);
        return res.status(HttpStatus.CREATED).json({
            message: "Province has been submitted successfully!",
            post: createdProvince,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() province: Province
    ) {
        const updatedProvince = await this.provinceService.update(id, province);
        if (!updatedProvince) {
            throw new NotFoundException('Province does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Province has been successfully updated',
            post: updatedProvince,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedProvince = await this.provinceService.remove(id);
        if (!removedProvince) {
            throw new NotFoundException('Province does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Province has been deleted',
            post: removedProvince,
        });
    }
}
