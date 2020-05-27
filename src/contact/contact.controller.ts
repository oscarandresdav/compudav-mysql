import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { Contact } from './contact.entity';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) { }

    @Get()
    async findAll(@Res() res) {
        const contacts = await this.contactService.findAll();
        return res.status(HttpStatus.OK).json(contacts);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const contact = await this.contactService.findOne(id);
        if (!contact) {
            throw new NotFoundException('Contact does not exist!');
        }
        return res.status(HttpStatus.OK).json(contact);
    }

    @Post()
    async create(@Res() res, @Body() contact) {
        const createdContact = await this.contactService.create(contact);
        return res.status(HttpStatus.CREATED).json({
            message: "Contact has been submitted successfully!",
            post: createdContact,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() contact: Contact
    ) {
        const updatedContact = await this.contactService.update(id, contact);
        if (!updatedContact) {
            throw new NotFoundException('Contact does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Contact has been successfully updated',
            post: updatedContact,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedContact = await this.contactService.remove(id);
        if (!removedContact) {
            throw new NotFoundException('Contact does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Contact has been deleted',
            post: removedContact,
        });
    }
}
