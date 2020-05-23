import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Company } from './company.entity';

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(Company) private readonly company: Repository<Company>,
    ) { }

    async findAll(): Promise<Company[]> {
        const companies = await this.company.find();
        return companies;
    }

    async findOne(id: string): Promise<Company> {
        const company = await this.company.findOne(id);
        return company;
    }

    async create(newCompany: Company): Promise<Company> {
        const createdCompany = this.company.save(newCompany);
        return createdCompany;
    }

    async update(id: string, updateCompany: Company): Promise<any> {
        const updatedCompany = await this.company.update(id, updateCompany);
        return updatedCompany;
    }

    async remove(id: string): Promise<any> {
        const removedCompany = await this.company.delete(id);
        return removedCompany;
    }
}
