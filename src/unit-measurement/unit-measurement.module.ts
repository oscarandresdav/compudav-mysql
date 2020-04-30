import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UnitMeasurement } from './unit-measurement.entity';
import { UnitMeasurementController } from './unit-measurement.controller';
import { UnitMeasurementService } from './unit-measurement.service';

@Module({
  imports: [TypeOrmModule.forFeature([UnitMeasurement])],
  controllers: [UnitMeasurementController],
  providers: [UnitMeasurementService]
})
export class UnitMeasurementModule { }
