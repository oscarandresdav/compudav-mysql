import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { PaymentMethod } from './payment-method.entity';
import { PaymentMethodService } from './payment-method.service';

@Controller('payment-method')
export class PaymentMethodController {
    constructor(private readonly paymentMethodService: PaymentMethodService) { }

    @Get()
    async findAll(@Res() res) {
        const paymentMethods = await this.paymentMethodService.findAll();
        return res.status(HttpStatus.OK).json(paymentMethods);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const paymentMethod = await this.paymentMethodService.findOne(id);
        if (!paymentMethod) {
            throw new NotFoundException('Payment method does not exist!');
        }
        return res.status(HttpStatus.OK).json(paymentMethod);
    }

    @Post()
    async create(@Res() res, @Body() paymentMethod) {
        const createdPaymentMethod = await this.paymentMethodService.create(paymentMethod);
        return res.status(HttpStatus.CREATED).json({
            message: 'Payment method has been submitted successfully!',
            post: createdPaymentMethod,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() paymentMethod: PaymentMethod
    ) {
        const updatedPaymentMethod = await this.paymentMethodService.update(id, paymentMethod);
        if (!updatedPaymentMethod) {
            throw new NotFoundException('Payment method does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Payment method has been successfully updated',
            post: updatedPaymentMethod,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedPaymentMethod = await this.paymentMethodService.remove(id);
        if (!removedPaymentMethod) {
            throw new NotFoundException('Payment method does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Payment method has been deleted',
            post: removedPaymentMethod,
        });
    }
}
