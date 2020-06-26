import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PaymentMethod } from './payment-method.entity';

@Injectable()
export class PaymentMethodService {
    constructor(
        @InjectRepository(PaymentMethod) private readonly paymentMethod: Repository<PaymentMethod>,
    ) { }

    async findAll(): Promise<PaymentMethod[]> {
        const paymentMethods = await this.paymentMethod.find();
        return paymentMethods;
    }

    async findOne(id: string): Promise<PaymentMethod> {
        const paymentMethod = await this.paymentMethod.findOne(id);
        return paymentMethod;
    }

    async create(newPaymentMethod: PaymentMethod): Promise<PaymentMethod> {
        const createdPaymentMethod = this.paymentMethod.save(newPaymentMethod);
        return createdPaymentMethod;
    }

    async update(id: string, updatePaymentMethod: PaymentMethod): Promise<any> {
        const updatedPaymentMethod = await this.paymentMethod.update(id, updatePaymentMethod);
        return updatedPaymentMethod;
    }

    async remove(id: string): Promise<any> {
        const removedPaymentMethod = await this.paymentMethod.delete(id);
        return removedPaymentMethod;
    }
}
