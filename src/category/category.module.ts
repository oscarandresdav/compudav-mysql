import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cecat_categoria } from './category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([cecat_categoria])],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
