import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  const config = new DocumentBuilder()
  .setTitle('7-HEALTH')
  .setDescription('Projeto 7-HEALTH')
  .setContact("CODE SEVEN","https://github.com/CodeSeven-Turma-JavaScript-13","")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
