import { Injectable } from '@nestjs/common';
import { CreateUsuarioCartaoDto } from './dto/create-usuario-cartao.dto';
import { UpdateUsuarioCartaoDto } from './dto/update-usuario-cartao.dto';
import { UsuariosCartoesRepository } from './usuarios-cartoes.repository';

@Injectable()
export class UsuariosCartoesService {
  constructor(
    private readonly usuariosCartoesRepository: UsuariosCartoesRepository,
  ) {}

  async create(createUsuarioCartaoDto: CreateUsuarioCartaoDto) {
    return await this.usuariosCartoesRepository.create(createUsuarioCartaoDto);
  }

  findAll() {
    return `This action returns all usuariosCartoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuariosCartoe`;
  }

  update(id: number, updateUsuarioCartaoDto: UpdateUsuarioCartaoDto) {
    return `This action updates a #${id} usuariosCartoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuariosCartoe`;
  }
}
