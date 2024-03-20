import { Module } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { EmpresasController } from './empresas.controller';
import { EmpresasRepository } from './empresas.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EmpresasController],
  providers: [EmpresasService, EmpresasRepository, PrismaService],
})
export class EmpresasModule {}
