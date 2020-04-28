import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UnitOfMeasurement } from './unit-of-measurement.entity';

@Injectable()
export class UnitOfMeasurementService {
    constructor(
        @InjectRepository(UnitOfMeasurement) private readonly measurement: Repository<UnitOfMeasurement>,
    ) { }

    async findAll(): Promise<UnitOfMeasurement[]> {
        const measurements = await this.measurement.find();
        return measurements;
    }

    async findOne(id: string): Promise<UnitOfMeasurement> {
        const measurement = await this.measurement.findOne(id);
        return measurement;
    }

    async create(newMeasurement: UnitOfMeasurement): Promise<UnitOfMeasurement> {
        const createdMeasurement = this.measurement.save(newMeasurement);
        return createdMeasurement;
    }

    async update(id: string, updateMeasurement: UnitOfMeasurement): Promise<any> {
        const updatedMeasurement = await this.measurement.update(id, updateMeasurement);
        return updatedMeasurement;
    }

    async remove(id: string): Promise<any> {
        const removedMeasurement = await this.measurement.delete(id);
        return removedMeasurement;
    }
}
