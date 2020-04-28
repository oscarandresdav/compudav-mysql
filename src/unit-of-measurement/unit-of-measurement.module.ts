import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UnitOfMeasurement } from './unit-of-measurement.entity';
import { UnitOfMeasurementController } from './unit-of-measurement.controller';
import { UnitOfMeasurementService } from './unit-of-measurement.service';

@Module({
  imports: [TypeOrmModule.forFeature([UnitOfMeasurement])],
  controllers: [UnitOfMeasurementController],
  providers: [UnitOfMeasurementService]
})
export class UnitOfMeasurementModule { }
