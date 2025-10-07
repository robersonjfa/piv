import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,POST,PATCH,DELETE,PUT,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));

  const config = new DocumentBuilder()
    .setTitle('TastyBoard API')
    .setDescription('API de receitas (NestJS + Prisma)')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PORT ? parseInt(process.env.PORT) : 3001;
  await app.listen(port);
  console.log(`🚀 API em http://localhost:${port}  | Swagger: /docs`);
}
bootstrap();
export {};
