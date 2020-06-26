import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { StatusDocument } from './status-document.entity';
import { StatusDocumentService } from './status-document.service';

@Controller('status-document')
export class StatusDocumentController {
    constructor(private readonly statusDocumentService: StatusDocumentService) { }

    @Get()
    async findAll(@Res() res) {
        const statusDocuments = await this.statusDocumentService.findAll();
        return res.status(HttpStatus.OK).json(statusDocuments);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const statusDocument = await this.statusDocumentService.findOne(id);
        if (!statusDocument) {
            throw new NotFoundException('Status of document does not exist!');
        }
        return res.status(HttpStatus.OK).json(statusDocument);
    }

    @Post()
    async create(@Res() res, @Body() statusDocument) {
        const createdStatusDocument = await this.statusDocumentService.create(statusDocument);
        return res.status(HttpStatus.CREATED).json({
            message: 'Status of document has been submitted successfully!',
            post: createdStatusDocument,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() statusDocument: StatusDocument
    ) {
        const updatedStatusDocument = await this.statusDocumentService.update(id, statusDocument);
        if (!updatedStatusDocument) {
            throw new NotFoundException('Status of document does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Status of document has been successfully updated',
            post: updatedStatusDocument,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedStatusDocument = await this.statusDocumentService.remove(id);
        if (!removedStatusDocument) {
            throw new NotFoundException('Status of document does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Status of document has been deleted',
            post: removedStatusDocument,
        });
    }
}
