import { DocumentBuilder } from '@nestjs/swagger';

const config = new DocumentBuilder()
  .setTitle('Github Commit History')
  .setDescription('API documentation for commits ')
  .setVersion('1.0')
  .addTag('commits')
  .build();
export default config;
