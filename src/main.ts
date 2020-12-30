import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    // 유효성 검사 체크
    new ValidationPipe({
      whitelist: true, // 이상한 데이터를 요청하지 못하게 막아둠
      forbidNonWhitelisted: true, // 이상한 데이터를 요청하지 못하게 막아둠
      transform: true, // string query를 각 데이터 타입에 맞게 바꿔줌
    }),
  );
  await app.listen(3000);
}

bootstrap();
