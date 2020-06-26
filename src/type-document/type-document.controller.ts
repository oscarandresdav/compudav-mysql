import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { TypeDocument } from './type-document.entity';
import { TypeDocumentService } from './type-document.service';

@Controller('type-document')
export class TypeDocumentController {
    constructor(private readonly typeDocumentService: TypeDocumentService) { }

    @Get()
    async findAll(@Res() res) {
        const typeDocuments = await this.typeDocumentService.findAll();
        return res.status(HttpStatus.OK).json(typeDocuments);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const typeDocument = await this.typeDocumentService.findOne(id);
        if (!typeDocument) {
            throw new NotFoundException('Type of document does not exist!');
        }
        return res.status(HttpStatus.OK).json(typeDocument);
    }

    @Post()
    async create(@Res() res, @Body() typeDocument) {
        const createdTypeDocument = await this.typeDocumentService.create(typeDocument);
        return res.status(HttpStatus.CREATED).json({
            message: 'Type of document has been submitted successfully!',
            post: createdTypeDocument,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() typeDocument: TypeDocument
    ) {
        const updatedTypeDocument = await this.typeDocumentService.update(id, typeDocument);
        if (!updatedTypeDocument) {
            throw new NotFoundException('Type of document does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Type of document has been successfully updated',
            post: updatedTypeDocument,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedTypeDocument = await this.typeDocumentService.remove(id);
        if (!removedTypeDocument) {
            throw new NotFoundException('Type of document does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Type of document has been deleted',
            post: removedTypeDocument,
        });
    }
}
