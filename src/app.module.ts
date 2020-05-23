import { TypeProductModule } from './type-product/type-product.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryModule } from './category/category.module';
import { UnitMeasurementModule } from './unit-measurement/unit-measurement.module';
import { IvaRateModule } from './iva-rate/iva-rate.module';
import { IceRateModule } from './ice-rate/ice-rate.module';
import { ProductModule } from './product/product.module';
import { AmbientModule } from './ambient/ambient.module';
import { CompanyModule } from './company/company.module';
import { LocationModule } from './location/location.module';

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
    IvaRateModule,
    IceRateModule,
    ProductModule,
    AmbientModule,
    CompanyModule,
    LocationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
