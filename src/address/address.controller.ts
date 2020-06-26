import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { Address } from './address.entity';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
    constructor(private readonly addressService: AddressService) { }

    @Get()
    async findAll(@Res() res) {
        const addresses = await this.addressService.findAll();
        return res.status(HttpStatus.OK).json(addresses);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const address = await this.addressService.findOne(id);
        if (!address) {
            throw new NotFoundException('Address does not exist!');
        }
        return res.status(HttpStatus.OK).json(address);
    }

    @Post()
    async create(@Res() res, @Body() address) {
        const createdAddress = await this.addressService.create(address);
        return res.status(HttpStatus.CREATED).json({
            message: 'Address has been submitted successfully!',
            post: createdAddress,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() address: Address
    ) {
        const updatedAddress = await this.addressService.update(id, address);
        if (!updatedAddress) {
            throw new NotFoundException('Address does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Address has been successfully updated',
            post: updatedAddress,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedAddress = await this.addressService.remove(id);
        if (!removedAddress) {
            throw new NotFoundException('Address does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Address has been deleted',
            post: removedAddress,
        });
    }
}
