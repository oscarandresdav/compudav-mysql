import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RetentionDetailment } from './retention-detailment.entity';
import { RetentionDetailmentController } from './retention-detailment.controller';
import { RetentionDetailmentService } from './retention-detailment.service';

@Module({
  imports: [TypeOrmModule.forFeature([RetentionDetailment])],
  providers: [RetentionDetailmentService],
  controllers: [RetentionDetailmentController]
})
export class RetentionDetailmentModule {}
