import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly user: Repository<User>,
    ) { }

    async findAll(): Promise<User[]> {
        const users = await this.user.find();
        return users;
    }

    async findOne(id: string): Promise<User> {
        const user = await this.user.findOne(id);
        return user;
    }

    async create(newUser: User): Promise<User> {
        const createdUser = this.user.save(newUser);
        return createdUser;
    }

    async update(id: string, updateUser: User): Promise<any> {
        const updatedUser = await this.user.update(id, updateUser);
        return updatedUser;
    }

    async remove(id: string): Promise<any> {
        const removedUser = await this.user.delete(id);
        return removedUser;
    }
}
