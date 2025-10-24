import { Controller, Get, Param, ParseIntPipe, Query, Post, Body} from '@nestjs/common';
import { MealsService } from './meals.service';
import { PaginationDTO } from './dto/pagination.dto';
import { CreateMealDTO } from './dto/create-meal.dto';

@Controller('meals')
export class MealsController {
    constructor(private readonly mealsService: MealsService){}

    //
    @Get()
    findAllByPagination(@Query() paginationDTO: PaginationDTO){
        return this.mealsService.findAllByPagination(paginationDTO);
    }

    @Get(':id')
    findByID(@Param('id', ParseIntPipe) id: number){
        return this.mealsService.findByID(id);
    }

    @Post()
    create(@Body() createMealDTO: CreateMealDTO) {
        return this.mealsService.create(createMealDTO);
    }
}
