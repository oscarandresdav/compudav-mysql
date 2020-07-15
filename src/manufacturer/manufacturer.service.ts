import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Manufacturer } from './manufacturer.entity';

@Injectable()
export class ManufacturerService {
    constructor(
        @InjectRepository(Manufacturer) private readonly manufacturer: Repository<Manufacturer>,
    ) { }

    async findAll(): Promise<Manufacturer[]> {
        const categories = await this.manufacturer.find();
        return categories;
    }

    async findOne(id: string): Promise<Manufacturer> {
        const manufacturer = await this.manufacturer.findOne(id);
        return manufacturer;
    }

    async create(newManufacturer: Manufacturer): Promise<Manufacturer> {
        const createdManufacturer = this.manufacturer.save(newManufacturer);
        return createdManufacturer;
    }

    async update(id: string, updateManufacturer: Manufacturer): Promise<any> {
        const updatedManufacturer = await this.manufacturer.update(id, updateManufacturer);
        return updatedManufacturer;
    }

    async remove(id: string): Promise<any> {
        const removedManufacturer = await this.manufacturer.delete(id);
        return removedManufacturer;
    }
}
