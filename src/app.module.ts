import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';

import { Usuario } from './usuario/entities/usuario.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'jujuba',
      database: 'db_lojadelivery',
      entities:[Usuario],
      synchronize: true,
      logging: true, // EXIBE O CODIGO SQL NO CONSOLE DO VSCODE // USAR APENAS EM DESENVOLVIMENTO
    }),
    UsuarioModule,
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
