import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const { PORT, ENVIRONMENT } = process.env;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({ origin: ['http://localhost:3000'], credentials: true });
  app.use(cookieParser());

  try {
    await app.listen(PORT, () => {
      console.log(`Running on Port ${PORT}`);
      console.log(`Running in ${ENVIRONMENT} mode`);
    });
  } catch (error) {
    console.error(error);
  }
}
bootstrap();
