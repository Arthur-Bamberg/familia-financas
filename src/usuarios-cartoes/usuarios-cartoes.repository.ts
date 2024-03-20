import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUsuarioCartaoDto } from './dto/create-usuario-cartao.dto';

@Injectable()
export class UsuariosCartoesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateUsuarioCartaoDto) {
    return this.prismaService.usuarios_cartoes.create({
      data: data,
    });
  }
}
