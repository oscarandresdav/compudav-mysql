import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RetentionConcept } from './retention-concept.entity';

@Injectable()
export class RetentionConceptService {
    constructor(
        @InjectRepository(RetentionConcept) private readonly retentionConcept: Repository<RetentionConcept>,
    ) { }

    async findAll(): Promise<RetentionConcept[]> {
        const retentionConcepts = await this.retentionConcept.find();
        return retentionConcepts;
    }

    async findOne(id: string): Promise<RetentionConcept> {
        const retentionConcept = await this.retentionConcept.findOne(id);
        return retentionConcept;
    }

    async create(newRetentionConcept: RetentionConcept): Promise<RetentionConcept> {
        const createdRetentionConcept = this.retentionConcept.save(newRetentionConcept);
        return createdRetentionConcept;
    }

    async update(id: string, updateRetentionConcept: RetentionConcept): Promise<any> {
        const updatedRetentionConcept = await this.retentionConcept.update(id, updateRetentionConcept);
        return updatedRetentionConcept;
    }

    async remove(id: string): Promise<any> {
        const removedRetentionConcept = await this.retentionConcept.delete(id);
        return removedRetentionConcept;
    }
}
