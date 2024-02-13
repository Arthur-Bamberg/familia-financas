import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateGrupoCartaoDto } from './dto/create-grupo-cartao.dto';

@Injectable()
export class GruposCartoesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createGrupoCartaoDto: CreateGrupoCartaoDto) {
    return this.prismaService.grupoCartao.create({
      data: createGrupoCartaoDto,
    });
  }
}
