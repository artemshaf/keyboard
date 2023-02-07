import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Keyboard app')
    .setDescription('Documentation on server Keyboard app')
    .setVersion('1.0.0')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/api/docs', app, swaggerDocument);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(4001);
  console.log(`Server start on url -> ${await app.getUrl()}`);
}
bootstrap();
