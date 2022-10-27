import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from "./person/person.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgress',
      password: '123456789',
      database: 'crudnest',
      autoLoadEntities: true
    }),
PersonModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
