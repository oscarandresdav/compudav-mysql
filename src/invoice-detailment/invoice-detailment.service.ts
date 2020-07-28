import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { InvoiceDetailment } from './invoice-detailment.entity';

@Injectable()
export class InvoiceDetailmentService {
    constructor(
        @InjectRepository(InvoiceDetailment) private readonly invoiceDetailment: Repository<InvoiceDetailment>,
    ) { }

    async findAll(): Promise<InvoiceDetailment[]> {
        const invoiceDetailments = await this.invoiceDetailment.find();
        return invoiceDetailments;
    }

    async findOne(id: string): Promise<InvoiceDetailment> {
        const invoiceDetailment = await this.invoiceDetailment.findOne(id);
        return invoiceDetailment;
    }

    async create(newInvoiceDetailment: InvoiceDetailment): Promise<InvoiceDetailment> {
        const createdInvoiceDetailment = this.invoiceDetailment.save(newInvoiceDetailment);
        return createdInvoiceDetailment;
    }

    async update(id: string, updateInvoiceDetailment: InvoiceDetailment): Promise<any> {
        const updatedInvoiceDetailment = await this.invoiceDetailment.update(id, updateInvoiceDetailment);
        return updatedInvoiceDetailment;
    }

    async remove(id: string): Promise<any> {
        const removedInvoiceDetailment = await this.invoiceDetailment.delete(id);
        return removedInvoiceDetailment;
    }
}
