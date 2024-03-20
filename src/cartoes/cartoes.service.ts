import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCartaoDto } from './dto/create-cartao.dto';
import { UpdateCartaoDto } from './dto/update-cartao.dto';

@Injectable()
export class CartoesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCartaoDto: CreateCartaoDto) {
    return await this.prismaService.cartoes.create({
      data: createCartaoDto,
    });
  }

  async findAll() {
    return await this.prismaService.cartoes.findMany();
  }

  async update(id: number, updateCartaoDto: UpdateCartaoDto) {
    return await this.prismaService.cartoes.update({
      where: { id },
      data: updateCartaoDto,
    });
  }

  async remove(id: number) {
    await this.prismaService.cartoes.delete({
      where: { id },
    });

    return {
      message: `Cartão com id ${id} removido com sucesso`,
    };
  }
}
