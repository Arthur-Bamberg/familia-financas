import { Injectable } from '@nestjs/common';
import { CreateTransacaoDto } from './dto/create-transacao.dto';
import { UpdateTransacaoDto } from './dto/update-transacao.dto';
import { TransacoesRepository } from './transacoes.repository';

@Injectable()
export class TransacoesService {
  constructor(private readonly transacoesRepository: TransacoesRepository) {}

  async create(createTransacaoDto: CreateTransacaoDto) {
    return await this.transacoesRepository.create(createTransacaoDto);
  }

  findAll() {
    return `This action returns all transacoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transacoe`;
  }

  update(id: number, updateTransacaoDto: UpdateTransacaoDto) {
    return `This action updates a #${id} transacoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} transacoe`;
  }
}
