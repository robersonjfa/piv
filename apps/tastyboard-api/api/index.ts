// api/index.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ValidationPipe } from '@nestjs/common';
import serverlessExpress from '@vendia/serverless-express';
import { ExpressAdapter } from '@nestjs/platform-express';
import express, { Request, Response } from 'express';

let cachedServer: ReturnType<typeof serverlessExpress> | undefined;

async function bootstrapServer() {
  const appExpress = express();
  const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(appExpress));
  nestApp.enableCors();
  nestApp.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
  await nestApp.init();
  return serverlessExpress({ app: appExpress });
}

export default async function handler(req: Request, res: Response) {
  if (!cachedServer) cachedServer = await bootstrapServer();
  return (cachedServer as any)(req, res);
}
