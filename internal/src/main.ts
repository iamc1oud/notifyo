import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { parse } from 'toml';
import { readFileSync } from 'fs';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Read the file.
  const config = readFileSync('../config.toml', 'utf-8')

  // Swagger documentation
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Notifyo')
    .setDescription('Notifiyo notification service documentation')
    .setVersion('1.0')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api', app, swaggerDocument);

  // Parse config file.
  const parsedConfig: object = parse(config);

  await app.listen(3000);
}
bootstrap();
