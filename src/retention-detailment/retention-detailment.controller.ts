import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { RetentionDetailment } from './retention-detailment.entity';
import { RetentionDetailmentService } from './retention-detailment.service';

@Controller('retention-detailment')
export class RetentionDetailmentController {
    constructor(private readonly retentionDetailmentService: RetentionDetailmentService) { }

    @Get()
    async findAll(@Res() res) {
        const retentionDetailments = await this.retentionDetailmentService.findAll();
        return res.status(HttpStatus.OK).json(retentionDetailments);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const retentionDetailment = await this.retentionDetailmentService.findOne(id);
        if (!retentionDetailment) {
            throw new NotFoundException('Retention detailment does not exist!');
        }
        return res.status(HttpStatus.OK).json(retentionDetailment);
    }

    @Post()
    async create(@Res() res, @Body() retentionDetailment) {
        const createdRetentionDetailment = await this.retentionDetailmentService.create(retentionDetailment);
        return res.status(HttpStatus.CREATED).json({
            message: 'Retention detailment has been submitted successfully!',
            post: createdRetentionDetailment,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() retentionDetailment: RetentionDetailment
    ) {
        const updatedRetentionDetailment = await this.retentionDetailmentService.update(id, retentionDetailment);
        if (!updatedRetentionDetailment) {
            throw new NotFoundException('Retention detailment does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Retention detailment has been successfully updated',
            post: updatedRetentionDetailment,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedRetentionDetailment = await this.retentionDetailmentService.remove(id);
        if (!removedRetentionDetailment) {
            throw new NotFoundException('Retention detailment does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Retention detailment has been deleted',
            post: removedRetentionDetailment,
        });
    }
}
