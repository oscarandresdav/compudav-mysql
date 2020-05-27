import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Address } from './address.entity';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(Address) private readonly address: Repository<Address>,
    ) { }

    async findAll(): Promise<Address[]> {
        const addresses = await this.address.find();
        return addresses;
    }

    async findOne(id: string): Promise<Address> {
        const address = await this.address.findOne(id);
        return address;
    }

    async create(newAddress: Address): Promise<Address> {
        const createdAddress = this.address.save(newAddress);
        return createdAddress;
    }

    async update(id: string, updateAddress: Address): Promise<any> {
        const updatedAddress = await this.address.update(id, updateAddress);
        return updatedAddress;
    }

    async remove(id: string): Promise<any> {
        const removedAddress = await this.address.delete(id);
        return removedAddress;
    }
}
