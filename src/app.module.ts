import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DogsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
