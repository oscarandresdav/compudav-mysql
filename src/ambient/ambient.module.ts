import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Ambient } from './ambient.entity';
import { AmbientService } from './ambient.service';
import { AmbientController } from './ambient.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Ambient])],
  controllers: [AmbientController],
  providers: [AmbientService]
})
export class AmbientModule {}
