import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeIssuance } from './type-issuance.entity';
import { TypeIssuanceController } from './type-issuance.controller';
import { TypeIssuanceService } from './type-issuance.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypeIssuance])],
  controllers: [TypeIssuanceController],
  providers: [TypeIssuanceService]
})
export class TypeIssuanceModule {}
