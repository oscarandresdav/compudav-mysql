import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeIdentification } from './type-identification.entity';
import { TypeIdentificationController } from './type-identification.controller';
import { TypeIdentificationService } from './type-identification.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypeIdentification])],
  controllers: [TypeIdentificationController],
  providers: [TypeIdentificationService]
})
export class TypeIdentificationModule {}
