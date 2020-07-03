import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { RetentionConcept } from './retention-concept.entity';
import { RetentionConceptService } from './retention-concept.service';

@Controller('retention-concept')
export class RetentionConceptController {
    constructor(private readonly retentionConceptService: RetentionConceptService) { }

    @Get()
    async findAll(@Res() res) {
        const retentionConcepts = await this.retentionConceptService.findAll();
        return res.status(HttpStatus.OK).json(retentionConcepts);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const retentionConcept = await this.retentionConceptService.findOne(id);
        if (!retentionConcept) {
            throw new NotFoundException('Retention concept does not exist!');
        }
        return res.status(HttpStatus.OK).json(retentionConcept);
    }

    @Post()
    async create(@Res() res, @Body() retentionConcept) {
        const createdRetentionConcept = await this.retentionConceptService.create(retentionConcept);
        return res.status(HttpStatus.CREATED).json({
            message: 'Retention concept has been submitted successfully!',
            post: createdRetentionConcept,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() retentionConcept: RetentionConcept
    ) {
        const updatedRetentionConcept = await this.retentionConceptService.update(id, retentionConcept);
        if (!updatedRetentionConcept) {
            throw new NotFoundException('Retention concept does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Retention concept has been successfully updated',
            post: updatedRetentionConcept,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedRetentionConcept = await this.retentionConceptService.remove(id);
        if (!removedRetentionConcept) {
            throw new NotFoundException('Retention concept does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Retention concept has been deleted',
            post: removedRetentionConcept,
        });
    }
}
