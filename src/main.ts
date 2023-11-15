import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {CorsOptions} from "@nestjs/common/interfaces/external/cors-options.interface";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  // Налаштування CORS
  const corsOptions: CorsOptions = {
    origin: ["http://localhost:3000", "https://book-library-serhii.vercel.app/"], // Дозволений домен
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Дозволені методи
    credentials: true, // Передача кредитів (якщо потрібно)
    optionsSuccessStatus: 200 // Дозволений статус відповіді для методів OPTIONS
  };
  app.enableCors(corsOptions);

  await app.listen(4000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
