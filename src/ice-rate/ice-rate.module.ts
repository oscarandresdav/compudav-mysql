import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IceRate } from './ice-rate.entity';
import { IceRateController } from './ice-rate.controller';
import { IceRateService } from './ice-rate.service';

@Module({
  imports: [TypeOrmModule.forFeature([IceRate])],
  controllers: [IceRateController],
  providers: [IceRateService]
})
export class IceRateModule {}
