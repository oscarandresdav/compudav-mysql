import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Contact } from './contact.entity';

@Injectable()
export class ContactService {
    constructor(
        @InjectRepository(Contact) private readonly contact: Repository<Contact>,
    ) { }

    async findAll(): Promise<Contact[]> {
        const contacts = await this.contact.find();
        return contacts;
    }

    async findOne(id: string): Promise<Contact> {
        const contact = await this.contact.findOne(id);
        return contact;
    }

    async create(newContact: Contact): Promise<Contact> {
        const createdContact = this.contact.save(newContact);
        return createdContact;
    }

    async update(id: string, updateContact: Contact): Promise<any> {
        const updatedContact = await this.contact.update(id, updateContact);
        return updatedContact;
    }

    async remove(id: string): Promise<any> {
        const removedContact = await this.contact.delete(id);
        return removedContact;
    }
}
