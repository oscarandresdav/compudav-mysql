import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Ambient } from './ambient.entity';

@Injectable()
export class AmbientService {
    constructor(
        @InjectRepository(Ambient) private readonly ambient: Repository<Ambient>,
    ) { }

    async findAll(): Promise<Ambient[]> {
        const ambients = await this.ambient.find();
        return ambients;
    }

    async findOne(id: string): Promise<Ambient> {
        const ambient = await this.ambient.findOne(id);
        return ambient;
    }

    async create(newAmbient: Ambient): Promise<Ambient> {
        const createdAmbient = this.ambient.save(newAmbient);
        return createdAmbient;
    }

    async update(id: string, updateAmbient: Ambient): Promise<any> {
        const updatedAmbient = await this.ambient.update(id, updateAmbient);
        return updatedAmbient;
    }

    async remove(id: string): Promise<any> {
        const removedAmbient = await this.ambient.delete(id);
        return removedAmbient;
    }
}
