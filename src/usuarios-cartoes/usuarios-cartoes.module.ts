import { Module } from '@nestjs/common';
import { UsuariosCartoesService } from './usuarios-cartoes.service';
import { UsuariosCartoesController } from './usuarios-cartoes.controller';
import { UsuariosCartoesRepository } from './usuarios-cartoes.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UsuariosCartoesController],
  providers: [UsuariosCartoesService, UsuariosCartoesRepository, PrismaService],
})
export class UsuariosCartoesModule {}
