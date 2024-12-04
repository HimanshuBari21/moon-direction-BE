import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { VideoService } from './video.service';

@UseGuards(JwtAuthGuard)
@Controller('video')
export class VideoController {
  constructor(private videoService: VideoService) {}
  @Get()
  getAllPublicVideos() {
    const videosData = this.videoService.getVideos();
    return videosData;
  }
}
