import { CreateUnityDto } from './../dto/create-unity.dto';
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateUnityDto } from '../dto/update-unity.dto';

@Injectable()
export class UnityRepository {

    constructor(private readonly prismaService: PrismaService) { }

    async paginate(
        page: number,
        size: number,
        sort: string,
        order: string,
        search: string,) {
        const results = await this.prismaService.unity.findMany({
            skip: page * size,
            take: Number(size),
            where: {
                name: { contains: search}
            },
            orderBy: {[sort]:order}
        })
        const totalItens = await this.prismaService.unity.count({
            where: { name: { contains: search, mode: 'insensitive' } }
        })

        return { results, totalItens }
    }

    async create(createUnityDto: CreateUnityDto){
       return await this.prismaService.unity.create({data: createUnityDto})
    }
       

    async update( id: string, updateunityDto: UpdateUnityDto){
        const idBig = BigInt(id)
        return await this.prismaService.unity.update({
            where:{ id: idBig },
            data: updateunityDto
        })
    }

    async delete( id: string){
        const idBig = BigInt(id)
        return await this.prismaService.unity.delete({
            where:{
                id: idBig
            }
        })
    }

    async findById( id: string){
        const idBig = BigInt(id)
        const unity =  await this.prismaService.unity.findFirst({
            where:{
                id: idBig
            }
        })

        if(!unity || null){
            throw new NotFoundException(`Id: ${id}, não encontrado!`)
          }
       
        return unity
      }
}
