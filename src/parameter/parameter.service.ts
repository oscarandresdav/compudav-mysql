import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Parameter } from './parameter.entity';

@Injectable()
export class ParameterService {
    constructor(
        @InjectRepository(Parameter) private readonly parameter: Repository<Parameter>,
    ) { }

    async findAll(): Promise<Parameter[]> {
        const parameters = await this.parameter.find();
        return parameters;
    }

    async findOne(id: string): Promise<Parameter> {
        const parameter = await this.parameter.findOne(id);
        return parameter;
    }

    async create(newParameter: Parameter): Promise<Parameter> {
        const createdParameter = this.parameter.save(newParameter);
        return createdParameter;
    }

    async update(id: string, updateParameter: Parameter): Promise<any> {
        const updatedParameter = await this.parameter.update(id, updateParameter);
        return updatedParameter;
    }

    async remove(id: string): Promise<any> {
        const removedParameter = await this.parameter.delete(id);
        return removedParameter;
    }
}
