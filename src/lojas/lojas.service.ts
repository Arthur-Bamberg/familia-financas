import { Injectable } from '@nestjs/common';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
import { LojasRepository } from './lojas.repository';

@Injectable()
export class LojasService {
  constructor(private readonly lojasRepository: LojasRepository) {}

  async create(createLojaDto: CreateLojaDto) {
    return await this.lojasRepository.create(createLojaDto);
  }

  findAll() {
    return `This action returns all lojas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loja`;
  }

  update(id: number, updateLojaDto: UpdateLojaDto) {
    return `This action updates a #${id} loja`;
  }

  remove(id: number) {
    return `This action removes a #${id} loja`;
  }
}
