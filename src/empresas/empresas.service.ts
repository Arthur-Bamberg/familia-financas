import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { EmpresasRepository } from './empresas.repository';

@Injectable()
export class EmpresasService {
  constructor(private readonly empresasRepository: EmpresasRepository) {}

  async create(createEmpresaDto: CreateEmpresaDto) {
    return await this.empresasRepository.create(createEmpresaDto);
  }

  findAll() {
    return `This action returns all Empresas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} Empresa`;
  }

  update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    return `This action updates a #${id} empresa`;
  }

  remove(id: number) {
    return `This action removes a #${id} empresa`;
  }
}
