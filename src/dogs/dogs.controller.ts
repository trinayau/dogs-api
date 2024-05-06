import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Controller('dogs')
export class DogsController {
  // GET /dogs --> get all dogs []
  @Get()
  getDogs(@Query('breed') breed: string) {
    return [{ breed }];
  }

  // GET /dogs/:id --> get dog by id {...}
  @Get(':id')
  getOneDog(@Param('id') id: string) {
    return {
      id,
    };
  }

  // POST /dogs --> create a dog {}
  @Post()
  createDog(@Body() createDogDto: CreateDogDto) {
    return {
      name: createDogDto.name,
    };
  }
  // PUT /dogs/:id --> update a dog by id {...}
  @Put(':id')
  updateDog(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    return {
      id,
      name: updateDogDto.name,
    };
  }
  // DELETE /dogs/:id --> delete a dog by id
  @Delete(':id')
  deleteDog(@Param('id') id: string) {
    return {
      id,
    };
  }
}

// The @Controller() decorator is used to define the scope of the controller.
