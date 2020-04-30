import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeProduct } from './type-product.entity';
import { TypeProductController } from './type-product.controller';
import { TypeProductService } from './type-product.service';

@Module({
    imports: [TypeOrmModule.forFeature([TypeProduct])],
    controllers: [TypeProductController],
    providers: [TypeProductService],
})
export class TypeProductModule { }
