import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { InvoiceDetailment } from './invoice-detailment.entity';
import { InvoiceDetailmentService } from './invoice-detailment.service';

@Controller('invoice-detailment')
export class InvoiceDetailmentController {
    constructor(private readonly invoiceDetailmentService: InvoiceDetailmentService) { }

    @Get()
    async findAll(@Res() res) {
        const invoiceDetailments = await this.invoiceDetailmentService.findAll();
        return res.status(HttpStatus.OK).json(invoiceDetailments);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const invoiceDetailment = await this.invoiceDetailmentService.findOne(id);
        if (!invoiceDetailment) {
            throw new NotFoundException('Invoice detailment does not exist!');
        }
        return res.status(HttpStatus.OK).json(invoiceDetailment);
    }

    @Post()
    async create(@Res() res, @Body() invoiceDetailment) {
        const createdInvoiceDetailment = await this.invoiceDetailmentService.create(invoiceDetailment);
        return res.status(HttpStatus.CREATED).json({
            message: 'Invoice detailment has been submitted successfully!',
            post: createdInvoiceDetailment,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() invoiceDetailment: InvoiceDetailment
    ) {
        const updatedInvoiceDetailment = await this.invoiceDetailmentService.update(id, invoiceDetailment);
        if (!updatedInvoiceDetailment) {
            throw new NotFoundException('Invoice detailment does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Invoice detailment has been successfully updated',
            post: updatedInvoiceDetailment,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedInvoiceDetailment = await this.invoiceDetailmentService.remove(id);
        if (!removedInvoiceDetailment) {
            throw new NotFoundException('Invoice detailment does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Invoice detailment has been deleted',
            post: removedInvoiceDetailment,
        });
    }
}
