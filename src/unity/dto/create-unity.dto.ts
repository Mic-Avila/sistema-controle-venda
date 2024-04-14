import { IsNotEmpty, IsString } from "class-validator";

export class CreateUnityDto{

    @IsNotEmpty({message: 'O nome não pode ser vazio'})
    @IsString({message:' É esperada uma string'})
    name: string
}