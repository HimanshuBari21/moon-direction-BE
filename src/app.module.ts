import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreatorModule } from './modules/creator/creator.module';
import { AuthModule } from './modules/auth/auth.module';
import { VideoModule } from './modules/video/video.module';
import { VideoService } from './modules/video/video.service';

@Module({
  imports: [CreatorModule, AuthModule, VideoModule],
  controllers: [AppController],
  providers: [AppService, VideoService],
})
export class AppModule {}
