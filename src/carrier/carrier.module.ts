import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Carrier } from './carrier.entity';
import { CarrierController } from './carrier.controller';
import { CarrierService } from './carrier.service';

@Module({
  imports: [TypeOrmModule.forFeature([Carrier])],
  controllers: [CarrierController],
  providers: [CarrierService]
})
export class CarrierModule {}
