import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { Document } from './document.entity';
import { DocumentService } from './document.service';

@Controller('document')
export class DocumentController {
    constructor(private readonly documentService: DocumentService) { }

    @Get()
    async findAll(@Res() res) {
        const documents = await this.documentService.findAll();
        return res.status(HttpStatus.OK).json(documents);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const document = await this.documentService.findOne(id);
        if (!document) {
            throw new NotFoundException('Document does not exist!');
        }
        return res.status(HttpStatus.OK).json(document);
    }

    @Post()
    async create(@Res() res, @Body() document) {
        const createdDocument = await this.documentService.create(document);
        return res.status(HttpStatus.CREATED).json({
            message: 'Document has been submitted successfully!',
            post: createdDocument,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() document: Document
    ) {
        const updatedDocument = await this.documentService.update(id, document);
        if (!updatedDocument) {
            throw new NotFoundException('Document does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Document has been successfully updated',
            post: updatedDocument,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedDocument = await this.documentService.remove(id);
        if (!removedDocument) {
            throw new NotFoundException('Document does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Document has been deleted',
            post: removedDocument,
        });
    }
}
