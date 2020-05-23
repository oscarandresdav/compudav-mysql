import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { Ambient } from './ambient.entity';
import { AmbientService } from './ambient.service';

@Controller('ambient')
export class AmbientController {
    constructor(private readonly ambientService: AmbientService) { }

    @Get()
    async findAll(@Res() res) {
        const ambients = await this.ambientService.findAll();
        return res.status(HttpStatus.OK).json(ambients);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const ambient = await this.ambientService.findOne(id);
        if (!ambient) {
            throw new NotFoundException('Ambient does not exist!');
        }
        return res.status(HttpStatus.OK).json(ambient);
    }

    @Post()
    async create(@Res() res, @Body() ambient) {
        const createdAmbient = await this.ambientService.create(ambient);
        return res.status(HttpStatus.CREATED).json({
            message: "Ambient has been submitted successfully!",
            post: createdAmbient,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() ambient: Ambient
    ) {
        const updatedAmbient = await this.ambientService.update(id, ambient);
        if (!updatedAmbient) {
            throw new NotFoundException('Ambient does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Ambient has been successfully updated',
            post: updatedAmbient,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedAmbient = await this.ambientService.remove(id);
        if (!removedAmbient) {
            throw new NotFoundException('Ambient does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Ambient has been deleted',
            post: removedAmbient,
        });
    }
}
