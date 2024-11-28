import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { getCreatorByID } from 'src/data/getCreatorById';
import { getContentCreators } from 'src/data/getCreators';

@Controller('creator')
export class CreatorController {
  @Get()
  findAll() {
    return { creators: getContentCreators };
  }

  @Get(':id')
  getByID(@Param('id') id: string) {
    return getCreatorByID(id) || '404 : No Results Found!';
  }

  @Post()
  addCreator(@Body() body: any) {
    return body;
  }
}
