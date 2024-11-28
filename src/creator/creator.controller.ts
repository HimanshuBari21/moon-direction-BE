import { Controller, Get } from '@nestjs/common';
import { getContentCreators } from 'src/data/getCreators';

@Controller('creator')
export class CreatorController {
  @Get()
  findAll() {
    return { creators: getContentCreators };
  }
}
