import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './entidades/persona.entity';

@Module({
  //Conexion se hizo con ayuda a la documentacion de nest
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'Personas',
      entities: [Persona],
      synchronize: true,
      logging:true,
    }),TypeOrmModule.forFeature([Persona])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
