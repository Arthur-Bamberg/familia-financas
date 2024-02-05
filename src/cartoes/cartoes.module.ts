import { Module } from '@nestjs/common';
import { CartoesService } from './cartoes.service';
import { CartoesController } from './cartoes.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CartoesController],
  providers: [CartoesService, PrismaService],
})
export class CartoesModule {}
