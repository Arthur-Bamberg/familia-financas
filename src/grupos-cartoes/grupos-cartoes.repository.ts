import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateGrupoCartaoDto } from './dto/create-grupo-cartao.dto';

@Injectable()
export class GruposCartoesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createGrupoCartaoDto: CreateGrupoCartaoDto) {
    return await this.prismaService.grupoCartao.create({
      data: createGrupoCartaoDto,
    });
  }

  async recalcularValorRestante(id: number, eh_gasto: boolean, valor: number) {
    const grupoCartao = await this.prismaService.grupoCartao.findUnique({
      where: {
        id: id,
      },
    });

    if (!grupoCartao) {
      throw new HttpException(
        'Grupo de cartão não encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    const valorRestante = grupoCartao.valor_restante;

    if (eh_gasto) {
      return await this.prismaService.grupoCartao.update({
        where: { id: id },
        data: {
          valor_restante: valorRestante - valor,
        },
      });
    } else {
      return await this.prismaService.grupoCartao.update({
        where: { id: id },
        data: {
          valor_restante: valorRestante + valor,
        },
      });
    }
  }
}
