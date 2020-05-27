import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Province } from './province.entity';

@Injectable()
export class ProvinceService {
    constructor(
        @InjectRepository(Province) private readonly province: Repository<Province>,
    ) { }

    async findAll(): Promise<Province[]> {
        const provinces = await this.province.find();
        return provinces;
    }

    async findOne(id: string): Promise<Province> {
        const province = await this.province.findOne(id);
        return province;
    }

    async create(newProvince: Province): Promise<Province> {
        const createdProvince = this.province.save(newProvince);
        return createdProvince;
    }

    async update(id: string, updateProvince: Province): Promise<any> {
        const updatedProvince = await this.province.update(id, updateProvince);
        return updatedProvince;
    }

    async remove(id: string): Promise<any> {
        const removedProvince = await this.province.delete(id);
        return removedProvince;
    }
}
