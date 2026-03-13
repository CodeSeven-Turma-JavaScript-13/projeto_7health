import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';

import { Usuario } from './usuario/entities/usuario.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Produto } from './produto/entities/produto.entity';
import { Categoria } from './categoria/entities/categoria.entity';
import { ProdutoModule } from './produto/produto.module';
import { CategoriaModule } from './categoria/categoria.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_7health',
      entities:[Usuario, Produto, Categoria],
      synchronize: true,
      logging: true, // EXIBE O CODIGO SQL NO CONSOLE DO VSCODE // USAR APENAS EM DESENVOLVIMENTO
    }),
    UsuarioModule, ProdutoModule, CategoriaModule
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
