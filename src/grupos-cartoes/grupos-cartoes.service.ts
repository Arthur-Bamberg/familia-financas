import { Injectable } from '@nestjs/common';
import { CreateGrupoCartaoDto } from './dto/create-grupo-cartao.dto';
import { UpdateGrupoCartaoDto } from './dto/update-grupo-cartao.dto';
import { GruposCartoesRepository } from './grupos-cartoes.repository';

@Injectable()
export class GruposCartoesService {
  constructor(
    private readonly gruposCartoesRepository: GruposCartoesRepository,
  ) {}

  async create(createGrupoCartaoDto: CreateGrupoCartaoDto) {
    return this.gruposCartoesRepository.create(createGrupoCartaoDto);
  }

  findAll() {
    return `This action returns all gruposCartoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gruposCartoe`;
  }

  update(id: number, updateGrupoCartaoDto: UpdateGrupoCartaoDto) {
    return `This action updates a #${id} gruposCartoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} gruposCartoe`;
  }

  async recalcularValorRestante(id: number, eh_gasto: boolean, valor: number) {
    return await this.gruposCartoesRepository.recalcularValorRestante(
      id,
      eh_gasto,
      valor,
    );
  }
}
