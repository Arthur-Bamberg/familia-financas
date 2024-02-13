import { Module } from '@nestjs/common';
import { LojasService } from './lojas.service';
import { LojasController } from './lojas.controller';
import { LojasRepository } from './lojas.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [LojasController],
  providers: [LojasService, LojasRepository, PrismaService],
})
export class LojasModule {}
