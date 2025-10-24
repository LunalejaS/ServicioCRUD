import { Module } from '@nestjs/common';
import { MealsController } from './meals.controller';
import { MealsService } from './meals.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule], 
  controllers: [MealsController],
  providers: [MealsService]
})
export class MealsModule {}
