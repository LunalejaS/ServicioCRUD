import { Controller, Get, Param, Query, Post, Body, Patch, Delete} from '@nestjs/common';
import { MealsService } from './meals.service';
import { PaginationDTO } from './dto/pagination.dto';
import { CreateMealDTO } from './dto/create-meal.dto';
import { UpdateMealDTO } from './dto/update-meal.dto';

@Controller('meals')
export class MealsController {
    constructor(private readonly mealsService: MealsService){}

    //
    @Get()
    findAllByPagination(@Query() paginationDTO: PaginationDTO){
        return this.mealsService.findAllByPagination(paginationDTO);
    }

    @Get(':id')
    findByID(@Param('id') id: string){
        return this.mealsService.findByID(id);
    }

    @Post()
    create(@Body() createMealDTO: CreateMealDTO) {
        return this.mealsService.create(createMealDTO);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateMealDTO: UpdateMealDTO) {
        return this.mealsService.update(id, updateMealDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.mealsService.remove(id);
    }
}
