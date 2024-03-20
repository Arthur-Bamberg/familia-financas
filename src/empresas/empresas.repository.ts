import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';

@Injectable()
export class EmpresasRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateEmpresaDto) {
    return await this.prismaService.empresas.create({
      data,
    });
  }
}
