import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeDocument } from './type-document.entity';
import { TypeDocumentController } from './type-document.controller';
import { TypeDocumentService } from './type-document.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypeDocument])],
  controllers: [TypeDocumentController],
  providers: [TypeDocumentService]
})
export class TypeDocumentModule {}
