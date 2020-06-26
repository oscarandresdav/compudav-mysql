import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { StatusDocument } from './status-document.entity';

@Injectable()
export class StatusDocumentService {
    constructor(
        @InjectRepository(StatusDocument) private readonly statusDocument: Repository<StatusDocument>,
    ) { }

    async findAll(): Promise<StatusDocument[]> {
        const statusDocuments = await this.statusDocument.find();
        return statusDocuments;
    }

    async findOne(id: string): Promise<StatusDocument> {
        const statusDocument = await this.statusDocument.findOne(id);
        return statusDocument;
    }

    async create(newStatusDocument: StatusDocument): Promise<StatusDocument> {
        const createdStatusDocument = this.statusDocument.save(newStatusDocument);
        return createdStatusDocument;
    }

    async update(id: string, updateStatusDocument: StatusDocument): Promise<any> {
        const updatedStatusDocument = await this.statusDocument.update(id, updateStatusDocument);
        return updatedStatusDocument;
    }

    async remove(id: string): Promise<any> {
        const removedStatusDocument = await this.statusDocument.delete(id);
        return removedStatusDocument;
    }
}
