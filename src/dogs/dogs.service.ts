import { UpdateDogDto } from './dto/update-dog.dto';
import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';

@Injectable()
export class DogsService {
  private dogs = [
    { id: 1, name: 'mimi', breed: 'pomsky' },
    { id: 2, name: 'fifi', breed: 'shihtzu' },
  ];

  getDogs(breed?: 'pomsky' | 'shihtzu', name?: string) {
    if (breed) {
      return this.dogs.filter((dog) => dog.breed === breed);
    }
    if (name) {
      return this.dogs.filter((dog) => dog.name === name);
    }

    return this.dogs;
  }
  getDog(id: number) {
    const dog = this.dogs.find((dog) => dog.id === id);
    if (!dog) {
      throw new Error('Dog not found');
    }
    return dog;
  }

  createDog(createDogDto: CreateDogDto) {
    const newDog = {
      id: this.dogs.length + 1,
      ...createDogDto,
    };

    this.dogs.push(newDog);
    return newDog;
  }

  updateDog(id: number, UpdateDogDto: UpdateDogDto) {
    this.dogs = this.dogs.map((dog) => {
      if (dog.id === id) {
        return {
          ...dog,
          ...UpdateDogDto,
        };
      }
      return dog;
    });
    return this.getDog(id);
  }

  removeDog(id: number) {
    const toBeRemoved = this.getDog(id);
    this.dogs = this.dogs.filter((dog) => dog.id !== id);
    return toBeRemoved;
  }
}
