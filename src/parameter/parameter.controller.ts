import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';
import { ParameterService } from './parameter.service';
import { Parameter } from './parameter.entity';

@Controller('parameter')
export class ParameterController {
    constructor(private readonly parameterService: ParameterService) { }

    @Get()
    async findAll(@Res() res) {
        const parameters = await this.parameterService.findAll();
        return res.status(HttpStatus.OK).json(parameters);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const parameter = await this.parameterService.findOne(id);
        if (!parameter) {
            throw new NotFoundException('Parameter does not exist!');
        }
        return res.status(HttpStatus.OK).json(parameter);
    }

    @Post()
    async create(@Res() res, @Body() company) {
        const createdParameter = await this.parameterService.create(company);
        return res.status(HttpStatus.CREATED).json({
            message: 'Parameter has been submitted successfully!',
            post: createdParameter,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() parameter: Parameter
    ) {
        const updatedParameter = await this.parameterService.update(id, parameter);
        if (!updatedParameter) {
            throw new NotFoundException('Parameter does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Parameter has been successfully updated',
            post: updatedParameter,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedParameter = await this.parameterService.remove(id);
        if (!removedParameter) {
            throw new NotFoundException('Parameter does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Parameter has been deleted',
            post: removedParameter,
        });
    }
}
