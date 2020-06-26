import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TypeDocument } from './type-document.entity';

@Injectable()
export class TypeDocumentService {
    constructor(
        @InjectRepository(TypeDocument) private readonly typeDocument: Repository<TypeDocument>,
    ) { }

    async findAll(): Promise<TypeDocument[]> {
        const typeDocuments = await this.typeDocument.find();
        return typeDocuments;
    }

    async findOne(id: string): Promise<TypeDocument> {
        const typeDocument = await this.typeDocument.findOne(id);
        return typeDocument;
    }

    async create(newTypeDocument: TypeDocument): Promise<TypeDocument> {
        const createdTypeDocument = this.typeDocument.save(newTypeDocument);
        return createdTypeDocument;
    }

    async update(id: string, updateTypeDocument: TypeDocument): Promise<any> {
        const updatedTypeDocument = await this.typeDocument.update(id, updateTypeDocument);
        return updatedTypeDocument;
    }

    async remove(id: string): Promise<any> {
        const removedTypeDocument = await this.typeDocument.delete(id);
        return removedTypeDocument;
    }
}
