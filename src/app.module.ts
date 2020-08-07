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
import { CityModule } from './city/city.module';
import { ProvinceModule } from './province/province.module';
import { AddressModule } from './address/address.module';
import { TypeIdentificationModule } from './type-identification/type-identification.module';
import { ContactModule } from './contact/contact.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';
import { TypeIssuanceModule } from './type-issuance/type-issuance.module';
import { TypeDocumentModule } from './type-document/type-document.module';
import { StatusDocumentModule } from './status-document/status-document.module';
import { CarrierModule } from './carrier/carrier.module';
import { DocumentModule } from './document/document.module';
import { RetentionConceptModule } from './retention-concept/retention-concept.module';
import { RetentionDetailmentModule } from './retention-detailment/retention-detailment.module';
import { UserModule } from './user/user.module';
import { ManufacturerModule } from './manufacturer/manufacturer.module';
import { InvoiceDetailmentModule } from './invoice-detailment/invoice-detailment.module';
import { ParameterModule } from './parameter/parameter.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'andres',
      password: '123456',
      database: 'compudav',
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
    LocationModule,
    CityModule,
    ProvinceModule,
    AddressModule,
    TypeIdentificationModule,
    ContactModule,
    PaymentMethodModule,
    TypeIssuanceModule,
    TypeDocumentModule,
    StatusDocumentModule,
    CarrierModule,
    DocumentModule,
    RetentionConceptModule,
    RetentionDetailmentModule,
    UserModule,
    ManufacturerModule,
    InvoiceDetailmentModule,
    ParameterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
