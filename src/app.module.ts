import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommitsModule } from './commits/commits.module';
import { ConfigModule } from '@nestjs/config';
import { Configuration } from './config';

@Module({
  imports: [ConfigModule.forRoot({ load: [Configuration] }), CommitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
