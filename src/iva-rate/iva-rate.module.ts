import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IvaRate } from './iva-rate.entity';
import { IvaRateController } from './iva-rate.controller';
import { IvaRateService } from './iva-rate.service';

@Module({
    imports: [TypeOrmModule.forFeature([IvaRate])],
    controllers: [IvaRateController],
    providers: [IvaRateService],
})
export class IvaRateModule { }
