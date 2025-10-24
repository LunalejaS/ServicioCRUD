import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MealsModule } from './meals/meals.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [MealsModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
