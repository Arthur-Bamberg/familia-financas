import { Injectable } from '@nestjs/common';
import { CreateTransacaoDto } from './dto/create-transacao.dto';
import { UpdateTransacaoDto } from './dto/update-transacao.dto';
import { TransacoesRepository } from './transacoes.repository';
import { GruposCartoesService } from 'src/grupos-cartoes/grupos-cartoes.service';

@Injectable()
export class TransacoesService {
  constructor(
    private readonly transacoesRepository: TransacoesRepository,
    private readonly gruposCartoesService: GruposCartoesService,
  ) {}

  async create(createTransacaoDto: CreateTransacaoDto) {
    const [, transacao] = await Promise.all([
      this.gruposCartoesService.recalcularValorRestante(
        createTransacaoDto.grupoCartaoId,
        createTransacaoDto.eh_gasto,
        createTransacaoDto.valor,
      ),
      this.transacoesRepository.create(createTransacaoDto),
    ]);

    return transacao;
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
