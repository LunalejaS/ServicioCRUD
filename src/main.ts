import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //PAra validar de manera automatica el DTO de paginación
  app.useGlobalPipes(new ValidationPipe({
  whitelist: true, // elimina campos no definidos en los DTOs
  forbidNonWhitelisted: true, // lanza error si mandas campos extras
  transform: true, // convierte tipos automáticamente (por ejemplo, strings a números)
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
