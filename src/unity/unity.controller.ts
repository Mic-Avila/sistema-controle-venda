import { CreateUnityDto } from './dto/create-unity.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import { UnityService } from './unity.service';
import { UpdateUnityDto } from './dto/update-unity.dto';

@Controller('unity')
export class UnityController {
  constructor(private readonly unityService: UnityService) {}

  @Get('pages?')
  async pagination(@Request() request) {
    return await this.unityService.paginate(
      request.query.hasOwnProperty('page') ? request.query.page : 0,
      request.query.hasOwnProperty('size') ? request.query.size : 10,
      request.query.hasOwnProperty('sort') ? request.query.sort : 'name',
      request.query.hasOwnProperty('order') ? request.query.order : 'asc',
      request.query.hasOwnProperty('search') ? request.query.search : '',
    );
  }

  @Get(':id')
  async findById(@Param('id') id: string){
    return this.unityService.findById(id)
  }

  @Post()
  async create(@Body() createUnityDto: CreateUnityDto) {
    return await this.unityService.create(createUnityDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUnityDto: UpdateUnityDto,
  ) {
    return await this.unityService.update(id, updateUnityDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.unityService.delete(id)
  }
}
