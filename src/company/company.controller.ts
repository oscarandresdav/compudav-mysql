import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { Company } from './company.entity';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) { }

    @Get()
    async findAll(@Res() res) {
        const companies = await this.companyService.findAll();
        return res.status(HttpStatus.OK).json(companies);
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const company = await this.companyService.findOne(id);
        if (!company) {
            throw new NotFoundException('Company does not exist!');
        }
        return res.status(HttpStatus.OK).json(company);
    }

    @Post()
    async create(@Res() res, @Body() company) {
        const createdCompany = await this.companyService.create(company);
        return res.status(HttpStatus.CREATED).json({
            message: "Company has been submitted successfully!",
            post: createdCompany,
        });
    }

    @Put()
    async update(
        @Res() res,
        @Query('id') id,
        @Body() company: Company
    ) {
        const updatedCompany = await this.companyService.update(id, company);
        if (!updatedCompany) {
            throw new NotFoundException('Company does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Company has been successfully updated',
            post: updatedCompany,
        });
    }

    @Delete()
    async remove(@Res() res, @Query('id') id) {
        const removedCompany = await this.companyService.remove(id);
        if (!removedCompany) {
            throw new NotFoundException('Company does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Company has been deleted',
            post: removedCompany,
        });
    }
}
