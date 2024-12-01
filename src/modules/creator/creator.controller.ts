import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import {
  addCreator,
  deleteCreator,
  getContentCreators,
  getCreatorByID,
} from 'src/queries/creators';

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
    const data = body;
    const addStatus = addCreator(data);

    return addStatus;
  }

  @Delete(':id')
  deleteCreator(@Param('id') id: string) {
    const deleteStatus = deleteCreator(id);

    return deleteStatus;
  }
}
