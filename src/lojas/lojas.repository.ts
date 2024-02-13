import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateLojaDto } from './dto/create-loja.dto';

@Injectable()
export class LojasRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateLojaDto) {
    return await this.prismaService.loja.create({
      data,
    });
  }
}
