import { IsString, IsNotEmpty, IsUrl, MaxLength } from "class-validator";

export class CreateMealDTO {
    @IsString()
    @IsNotEmpty({message: "El campo 'nombre' es obligatorio."})
    nombre: string;

    @IsString()
    @IsNotEmpty({message: "El campo 'categoria' es obligatorio."})
    categoria: string;

    @IsString()
    @IsNotEmpty({message: "El campo 'area' es obligatorio."})
    area: string;

    @IsString()
    @IsNotEmpty({message: "El campo 'instrucciones' es obligatorio."})
    instrucciones: string;

    @IsUrl({}, { message: "El campo 'miniatura' debe ser una URL válida" })
    @IsNotEmpty({message: "El campo 'miniatura' es obligatorio."})
    miniatura: string;
}