import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StatusDocument } from './status-document.entity';
import { StatusDocumentService } from './status-document.service';
import { StatusDocumentController } from './status-document.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StatusDocument])],
  providers: [StatusDocumentService],
  controllers: [StatusDocumentController]
})
export class StatusDocumentModule {}
