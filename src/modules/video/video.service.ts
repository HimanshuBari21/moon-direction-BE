import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class VideoService {
  getVideos = async () => {
    try {
      const videos = await prisma.video.findMany();
      if (videos.length) {
        return videos;
      } else {
        return NotFoundException;
      }
    } catch (error) {
      return error;
    }
  };
}
