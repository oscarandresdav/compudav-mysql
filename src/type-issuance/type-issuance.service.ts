import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TypeIssuance } from './type-issuance.entity';

@Injectable()
export class TypeIssuanceService {
    constructor(
        @InjectRepository(TypeIssuance) private readonly typeIssuance: Repository<TypeIssuance>,
    ) { }

    async findAll(): Promise<TypeIssuance[]> {
        const typeIssuances = await this.typeIssuance.find();
        return typeIssuances;
    }

    async findOne(id: string): Promise<TypeIssuance> {
        const typeIssuance = await this.typeIssuance.findOne(id);
        return typeIssuance;
    }

    async create(newTypeIssuance: TypeIssuance): Promise<TypeIssuance> {
        const createdTypeIssuance = this.typeIssuance.save(newTypeIssuance);
        return createdTypeIssuance;
    }

    async update(id: string, updateTypeIssuance: TypeIssuance): Promise<any> {
        const updatedTypeIssuance = await this.typeIssuance.update(id, updateTypeIssuance);
        return updatedTypeIssuance;
    }

    async remove(id: string): Promise<any> {
        const removedTypeIssuance = await this.typeIssuance.delete(id);
        return removedTypeIssuance;
    }
}
