import { Module } from '@nestjs/common';
import { UnityService } from './unity.service';
import { UnityController } from './unity.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UnityRepository } from './repository/unity.repository';

@Module({
    imports:[],
    controllers:[UnityController],
    providers:[UnityService, PrismaService, UnityRepository]
})
export class UnityModule {}
