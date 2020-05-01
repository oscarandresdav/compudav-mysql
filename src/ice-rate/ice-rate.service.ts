import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IceRate } from './ice-rate.entity';

@Injectable()
export class IceRateService {
    constructor(
        @InjectRepository(IceRate) private readonly iceRate: Repository<IceRate>,
    ) { }

    async findAll(): Promise<IceRate[]> {
        const iceRates = await this.iceRate.find();
        return iceRates;
    }

    async findOne(id: string): Promise<IceRate> {
        const iceRate = await this.iceRate.findOne(id);
        return iceRate;
    }

    async create(newIceRate: IceRate): Promise<IceRate> {
        const createdIceRate = this.iceRate.save(newIceRate);
        return createdIceRate;
    }

    async update(id: string, updateIceRate: IceRate): Promise<any> {
        const updatedIceRate = await this.iceRate.update(id, updateIceRate);
        return updatedIceRate;
    }

    async remove(id: string): Promise<any> {
        const removedIceRate = await this.iceRate.delete(id);
        return removedIceRate;
    }
}
