import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TypeIdentification } from './type-identification.entity';

@Injectable()
export class TypeIdentificationService {
    constructor (
        @InjectRepository(TypeIdentification) private readonly typeIdentification: Repository<TypeIdentification>
    ) { }

    async findAll(): Promise<TypeIdentification[]> {
        const typeIdentifications = await this.typeIdentification.find();
        return typeIdentifications;
    }

    async findOne(id: string): Promise<TypeIdentification> {
        const typeIdentification = await this.typeIdentification.findOne(id);
        return typeIdentification;
    }

    async create(newTypeIdentification: TypeIdentification): Promise<TypeIdentification> {
        const createdTypeIdentification = this.typeIdentification.save(newTypeIdentification);
        return createdTypeIdentification;
    }

    async update(id: string, updateTypeIdentification: TypeIdentification): Promise<any> {
        const updatedTypeIdentification = await this.typeIdentification.update(id, updateTypeIdentification);
        return updatedTypeIdentification;
    }

    async remove(id: string): Promise<any> {
        const removedTypeIdentification = await this.typeIdentification.delete(id);
        return removedTypeIdentification;
    }
}
