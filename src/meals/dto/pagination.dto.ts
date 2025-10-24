import { IsInt, Min, IsNotEmpty} from 'class-validator';
import { Type } from 'class-transformer'

//DTO para paginación
export class PaginationDTO {
    @Type(() => Number)
    @IsNotEmpty({message: "El parámetro 'limit' es obligatorio."})
    @IsInt({message: "El parámetro 'limit' debe de ser un número entero."})
    @Min(1, {message: "El parámetro 'limit' debe ser mayor o igual a 1."})
    limit: number;

    @Type(() => Number)
    @IsNotEmpty({message: "El parámetro 'offset' es obligatorio."})
    @IsInt({message: "El parámetro 'offset' debe de ser un número entero."})
    @Min(0, {message: "El parámetro 'ofsset' debe ser mayor o igual a 0."})
    offset: number;
}