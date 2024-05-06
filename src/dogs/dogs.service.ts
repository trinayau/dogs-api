import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
  private dogs = [
    { id: 1, name: 'Mimi', breed: 'Pomsky' },
    { id: 2, name: 'Fifi', breed: 'Shih Tzu' },
  ];

  getDogs(breed?: 'Pomsky' | 'Shih Tzu') {
    if (breed) {
      return this.dogs.filter((dog) => dog.breed === breed);
    }

    return this.dogs;
  }
}
