import { TypeProductModule } from './type-product/type-product.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryModule } from './category/category.module';
import { UnitMeasurementModule } from './unit-measurement/unit-measurement.module';
import { IvaRateModule } from './iva-rate/iva-rate.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'compudav',
      password: 'compudav',
      database: 'compudavdb',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      keepConnectionAlive: true,
      retryAttempts: 2,
      retryDelay: 1000,
    }),
    CategoryModule,
    UnitMeasurementModule,
    TypeProductModule, 
    IvaRateModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
