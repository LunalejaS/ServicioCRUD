import { BadGatewayException, Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, NotFoundError } from 'rxjs';
import axios from 'axios';
import { PaginationDTO } from './dto/pagination.dto';
import { v4 as uuidv4 } from 'uuid';
import { CreateMealDTO } from './dto/create-meal.dto';

@Injectable()
export class MealsService {
    /*
    NOTA: Debido a que la API no permite crear comidas, pues es una API únicamente de lectura
    se simulara la creación de nuevos datos en la BD al crear un arreglo temporal donde se irán
    almacenando estos datos.
    */

    private meals: any[] = [];

    constructor( private readonly httpService: HttpService ){}
    //'findAll' nos permitirá listar todas las comidas disponibles en la API de TheMealDB
    async findAllByPagination(paginationDTO: PaginationDTO){
        const { limit, offset } = paginationDTO;
        //Llamamos el endpoint que contiene todas las comidas disponibles en la BD
        const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
        const { data } = await firstValueFrom(this.httpService.get(url));
        //Verificamos que la API si nos envie datos de la BD
        if (!data.meals || !Array.isArray(data.meals)){
            throw new NotFoundException('No se encontraron comidas');
        }
        return data.meals.slice(offset, offset + limit);
    }
    //'findByID' nos permitirá obtener una sola comida según su ID único
    async findByID( id: number ){
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        const { data } = await firstValueFrom(this.httpService.get(url));
        //En caso de no encontrar una comida asociada a ese ID
        if ( !data.meals ){
            throw new NotFoundException(`No se encontro comida con ID ${id}`);
        }
        //Retornamos la comida encontrada
        return data.meals[0];
    }
    //Crear una nueva comida de manera local
    create(createMealDTO: CreateMealDTO){
        const newMeal = {
            id: uuidv4(),
            ...createMealDTO,
        };
        this.meals.push(newMeal);
        return {
            message: "¡Nueva comida agragada con éxito!",
            meal: newMeal,
        };
    }
}
