import { Module } from '@nestjs/common';
import { ParameterController } from './parameter.controller';
import { ParameterService } from './parameter.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parameter } from './parameter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Parameter])],
  controllers: [ParameterController],
  providers: [ParameterService]
})
export class ParameterModule {}
