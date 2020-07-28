import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { InvoiceDetailmentController } from './invoice-detailment.controller';
import { InvoiceDetailmentService } from './invoice-detailment.service';
import { InvoiceDetailment } from './invoice-detailment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceDetailment])],
  controllers: [InvoiceDetailmentController],
  providers: [InvoiceDetailmentService]
})
export class InvoiceDetailmentModule {}
