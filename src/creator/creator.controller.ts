import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { getCreatorByID } from 'src/data/getCreatorById';
import { getContentCreators } from 'src/data/getCreators';

@Controller('creator')
export class CreatorController {
  @Get()
  findAll() {
    const creators = getContentCreators();

    if (creators) {
      return creators;
    } else {
      throw new NotFoundException('No users found'); // Throw a 404 error
    }
  }

  @Get(':id')
  getByID(@Param('id') id: string) {
    const selectedCreator = getCreatorByID(id);

    if (selectedCreator) {
      return selectedCreator;
    } else {
      throw new NotFoundException('No user found'); // Throw a 404 error
    }
  }

  @Post()
  addCreator(@Body() body: any) {
    return body;
  }
}
