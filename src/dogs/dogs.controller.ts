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
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {} // Dependency Injection

  // GET /dogs --> get all dogs []
  @Get()
  getDogs(@Query('breed') breed: 'pomsky' | 'shihtzu') {
    // const service = new DogsService();
    return this.dogsService.getDogs(breed);
  }

  // GET /dogs/:id --> get dog by id {...}
  @Get(':id')
  getOneDog(@Param('id') id: string) {
    return this.dogsService.getDog(+id);
  }

  // POST /dogs --> create a dog {}
  @Post()
  createDog(@Body() createDogDto: CreateDogDto) {
    return this.dogsService.createDog(createDogDto);
  }
  // PUT /dogs/:id --> update a dog by id {...}
  @Put(':id')
  updateDog(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    return this.dogsService.updateDog(+id, updateDogDto);
  }
  // DELETE /dogs/:id --> delete a dog by id
  @Delete(':id')
  deleteDog(@Param('id') id: string) {
    return this.dogsService.removeDog(+id);
  }
}

// The @Controller() decorator is used to define the scope of the controller.
