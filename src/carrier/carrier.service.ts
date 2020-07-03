import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Carrier } from './carrier.entity';

@Injectable()
export class CarrierService {
    constructor(
        @InjectRepository(Carrier) private readonly carrier: Repository<Carrier>,
    ) { }

    async findAll(): Promise<Carrier[]> {
        const carriers = await this.carrier.find();
        return carriers;
    }

    async findOne(id: string): Promise<Carrier> {
        const carrier = await this.carrier.findOne(id);
        return carrier;
    }

    async create(newCarrier: Carrier): Promise<Carrier> {
        const createdCarrier = this.carrier.save(newCarrier);
        return createdCarrier;
    }

    async update(id: string, updateCarrier: Carrier): Promise<any> {
        const updatedCarrier = await this.carrier.update(id, updateCarrier);
        return updatedCarrier;
    }

    async remove(id: string): Promise<any> {
        const removedCarrier = await this.carrier.delete(id);
        return removedCarrier;
    }
}
