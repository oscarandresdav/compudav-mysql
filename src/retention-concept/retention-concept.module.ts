import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RetentionConcept } from './retention-concept.entity';
import { RetentionConceptController } from './retention-concept.controller';
import { RetentionConceptService } from './retention-concept.service';

@Module({
  imports: [TypeOrmModule.forFeature([RetentionConcept])],
  controllers: [RetentionConceptController],
  providers: [RetentionConceptService]
})
export class RetentionConceptModule {}
