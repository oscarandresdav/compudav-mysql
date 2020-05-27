import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { City } from './city.entity';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(City) private readonly city: Repository<City>,
    ) { }

    async findAll(): Promise<City[]> {
        const cities = await this.city.find();
        return cities;
    }

    async findOne(id: string): Promise<City> {
        const city = await this.city.findOne(id);
        return city;
    }

    async create(newCity: City): Promise<City> {
        const createdCity = this.city.save(newCity);
        return createdCity;
    }

    async update(id: string, updateCity: City): Promise<any> {
        const updatedCity = await this.city.update(id, updateCity);
        return updatedCity;
    }

    async remove(id: string): Promise<any> {
        const removedCity = await this.city.delete(id);
        return removedCity;
    }
}
