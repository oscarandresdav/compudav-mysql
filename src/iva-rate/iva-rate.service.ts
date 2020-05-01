import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { IvaRate } from './iva-rate.entity';

@Injectable()
export class IvaRateService {
    constructor(
        @InjectRepository(IvaRate) private readonly ivaRate: Repository<IvaRate>,
    ) { }

    async findAll(): Promise<IvaRate[]> {
        const ivaRates = await this.ivaRate.find();
        return ivaRates;
    }

    async findOne(id: string): Promise<IvaRate> {
        const ivaRate = await this.ivaRate.findOne(id);
        return ivaRate;
    }

    async create(newIvaRate: IvaRate): Promise<IvaRate> {
        const createdIvaRate = this.ivaRate.save(newIvaRate);
        return createdIvaRate;
    }

    async update(id: string, updateIvaRate: IvaRate): Promise<any> {
        const updatedIvaRate = await this.ivaRate.update(id, updateIvaRate);
        return updatedIvaRate;
    }

    async remove(id: string): Promise<any> {
        const removedIvaRate = await this.ivaRate.delete(id);
        return removedIvaRate;
    }
}
