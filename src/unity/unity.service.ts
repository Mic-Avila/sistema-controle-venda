import { CreateUnityDto } from './dto/create-unity.dto';
import { UpdateUnityDto } from './dto/update-unity.dto';
import { UnityRepository } from './repository/unity.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UnityService {
  constructor(private readonly repository: UnityRepository) {}

  async paginate(
    page: number,
    size: number,
    sort: string,
    order: string,
    search: string,
  ) {
    const {results, totalItens} = await this.repository.paginate(
        page,
        size,
        sort,
        order,
        search
    )
    const totalPages = Math.ceil(totalItens / size) - 1
    const currentPage = Number(page)
    
    return{
        results,
        pagination:{
            length: totalItens,
            size: size,
            lastPage: totalPages,
            page: currentPage,
            startIndex: currentPage * size,
            endIndex: currentPage * size + (size -1)
        }
    }
  }

  async create(createUnityDto: CreateUnityDto){
    return await this.repository.create(createUnityDto)
  }

  async update(id: string, updateUnityDto: UpdateUnityDto){
    return await this.repository.update( id, updateUnityDto)
  }

  async delete(id: string){
    return await this.repository.delete(id)
  }
 
  async findById(id: string){
    const unity = await this.repository.findById(id)

    return unity
  }
}
