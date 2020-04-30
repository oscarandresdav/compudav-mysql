import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UnitMeasurement } from './unit-measurement.entity';

@Injectable()
export class UnitMeasurementService {
    constructor(
        @InjectRepository(UnitMeasurement) private readonly measurement: Repository<UnitMeasurement>,
    ) { }

    async findAll(): Promise<UnitMeasurement[]> {
        const measurements = await this.measurement.find();
        return measurements;
    }

    async findOne(id: string): Promise<UnitMeasurement> {
        const measurement = await this.measurement.findOne(id);
        return measurement;
    }

    async create(newMeasurement: UnitMeasurement): Promise<UnitMeasurement> {
        const createdMeasurement = this.measurement.save(newMeasurement);
        return createdMeasurement;
    }

    async update(id: string, updateMeasurement: UnitMeasurement): Promise<any> {
        const updatedMeasurement = await this.measurement.update(id, updateMeasurement);
        return updatedMeasurement;
    }

    async remove(id: string): Promise<any> {
        const removedMeasurement = await this.measurement.delete(id);
        return removedMeasurement;
    }
}
