import { Controller, Get, Param, ParseIntPipe, Query} from '@nestjs/common';
import { MealsService } from './meals.service';
import { PaginationDTO } from './dto/pagination.dto';

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
}
