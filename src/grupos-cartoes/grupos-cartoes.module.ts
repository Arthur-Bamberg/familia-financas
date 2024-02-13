import { Module } from '@nestjs/common';
import { GruposCartoesService } from './grupos-cartoes.service';
import { GruposCartoesController } from './grupos-cartoes.controller';
import { GruposCartoesRepository } from './grupos-cartoes.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [GruposCartoesController],
  providers: [GruposCartoesService, GruposCartoesRepository, PrismaService],
})
export class GruposCartoesModule {}
