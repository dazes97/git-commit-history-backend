import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import config from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  const configService = app.get(ConfigService);
  const port = configService.get('port');
  const originUrl = configService.get('origin.url');
  const originPort = configService.get('origin.port');
  const enviroment = configService.get('enviroment');
  app.enableCors({
    origin: `${originUrl}:${originPort}`,
  });
  if (enviroment === 'development') {
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
  await app.listen(port);
}
bootstrap();
