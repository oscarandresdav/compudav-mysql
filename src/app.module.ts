import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'k180b036',
      database: 'compudavdb',
      entities: [],
      synchronize: true,
      keepConnectionAlive: true,
      retryAttempts: 2,
      retryDelay: 1000,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
