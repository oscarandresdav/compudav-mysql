import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RetentionDetailment } from './retention-detailment.entity';

@Injectable()
export class RetentionDetailmentService {
    constructor(
        @InjectRepository(RetentionDetailment) private readonly retentionDetailment: Repository<RetentionDetailment>,
    ) { }

    async findAll(): Promise<RetentionDetailment[]> {
        const retentionDetailments = await this.retentionDetailment.find();
        return retentionDetailments;
    }

    async findOne(id: string): Promise<RetentionDetailment> {
        const retentionDetailment = await this.retentionDetailment.findOne(id);
        return retentionDetailment;
    }

    async create(newRetentionDetailment: RetentionDetailment): Promise<RetentionDetailment> {
        const createdRetentionDetailment = this.retentionDetailment.save(newRetentionDetailment);
        return createdRetentionDetailment;
    }

    async update(id: string, updateRetentionDetailment: RetentionDetailment): Promise<any> {
        const updatedRetentionDetailment = await this.retentionDetailment.update(id, updateRetentionDetailment);
        return updatedRetentionDetailment;
    }

    async remove(id: string): Promise<any> {
        const removedRetentionDetailment = await this.retentionDetailment.delete(id);
        return removedRetentionDetailment;
    }
}
