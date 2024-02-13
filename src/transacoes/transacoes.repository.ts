import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTransacaoDto } from './dto/create-transacao.dto';

@Injectable()
export class TransacoesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateTransacaoDto) {
    return await this.prismaService.transacao.create({
      data,
    });
  }
}
