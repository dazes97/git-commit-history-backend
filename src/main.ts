import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('port');
  const originUrl = configService.get('origin.url');
  const originPort = configService.get('origin.port');
  app.enableCors({
    origin: `${originUrl}:${originPort}`,
  });
  await app.listen(port);
}
bootstrap();
