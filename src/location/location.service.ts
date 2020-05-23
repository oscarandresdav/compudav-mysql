import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Location } from './location.entity';

@Injectable()
export class LocationService {
    constructor(
        @InjectRepository(Location) private readonly location: Repository<Location>,
    ) { }

    async findAll(): Promise<Location[]> {
        const locations = await this.location.find();
        return locations;
    }

    async findOne(id: string): Promise<Location> {
        const location = await this.location.findOne(id);
        return location;
    }

    async create(newLocation: Location): Promise<Location> {
        const createdLocation = this.location.save(newLocation);
        return createdLocation;
    }

    async update(id: string, updateLocation: Location): Promise<any> {
        const updatedLocation = await this.location.update(id, updateLocation);
        return updatedLocation;
    }

    async remove(id: string): Promise<any> {
        const removedLocation = await this.location.delete(id);
        return removedLocation;
    }
}
