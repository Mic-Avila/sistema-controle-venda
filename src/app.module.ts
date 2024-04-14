import { Module, ValidationPipe } from '@nestjs/common';
import { UnityModule } from './unity/unity.module';
import { PrismaService } from './prisma/prisma.service';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [UnityModule],
  controllers: [],
  providers: [PrismaService, 
    {
    provide: APP_PIPE,
    useClass: ValidationPipe,
  } ],
})
export class AppModule {}
