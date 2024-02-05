import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCartaoDto } from './dto/create-cartao.dto';
import { UpdateCartaoDto } from './dto/update-cartao.dto';

@Injectable()
export class CartoesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCartaoDto: CreateCartaoDto) {
    return await this.prismaService.cartao.create({
      data: createCartaoDto,
    });
  }

  async findAll() {
    return await this.prismaService.cartao.findMany();
  }

  async update(id: number, updateCartaoDto: UpdateCartaoDto) {
    return await this.prismaService.cartao.update({
      where: { id },
      data: updateCartaoDto,
    });
  }

  async remove(id: number) {
    await this.prismaService.cartao.delete({
      where: { id },
    });

    return {
      message: `Cartão com id ${id} removido com sucesso`,
    };
  }
}
