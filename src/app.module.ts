import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryModule } from './category/category.module';
import { UnitOfMeasurementModule } from './unit-of-measurement/unit-of-measurement.module';

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
    UnitOfMeasurementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
