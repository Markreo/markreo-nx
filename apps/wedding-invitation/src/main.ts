/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as hbs from 'express-handlebars';
import { AppModule } from './app/app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import { resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  console.log('__dirname', __dirname)
  console.log('public', resolve(__dirname, 'public'))
  app.useStaticAssets(resolve(__dirname, 'public'));
  app.setBaseViewsDir(resolve(__dirname, 'views'));
  app.setViewEngine('hbs');

  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/`
  );
}

bootstrap();
