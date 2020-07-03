import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Document } from './document.entity'

@Injectable()
export class DocumentService {
    constructor(
        @InjectRepository(Document) private readonly document: Repository<Document>,
    ) { }

    async findAll(): Promise<Document[]> {
        const documents = await this.document.find();
        return documents;
    }

    async findOne(id: string): Promise<Document> {
        const document = await this.document.findOne(id);
        return document;
    }

    async create(newDocument: Document): Promise<Document> {
        const createdDocument = this.document.save(newDocument);
        return createdDocument;
    }

    async update(id: string, updateDocument: Document): Promise<any> {
        const updatedDocument = await this.document.update(id, updateDocument);
        return updatedDocument;
    }

    async remove(id: string): Promise<any> {
        const removedDocument = await this.document.delete(id);
        return removedDocument;
    }
}
