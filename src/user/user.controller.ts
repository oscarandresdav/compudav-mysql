import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async findAll(@Res() res) {
        const users = await this.userService.findAll();
        return res.status(HttpStatus.OK).json(users);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const user = await this.userService.findOne(id);
        if (!user) {
            throw new NotFoundException('User does not exist!');
        }
        return res.status(HttpStatus.OK).json(user);
    }

    @Post()
    async create(@Res() res, @Body() user) {
        const createdUser = await this.userService.create(user);
        return res.status(HttpStatus.CREATED).json({
            message: 'User has been submitted successfully!',
            post: createdUser,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() user: User
    ) {
        const updatedUser = await this.userService.update(id, user);
        if (!updatedUser) {
            throw new NotFoundException('User does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'User has been successfully updated',
            post: updatedUser,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedUser = await this.userService.remove(id);
        if (!removedUser) {
            throw new NotFoundException('User does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'User has been deleted',
            post: removedUser,
        });
    }
}
