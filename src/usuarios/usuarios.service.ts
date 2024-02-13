import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    createUsuarioDto.senha = await bcrypt.hash(
      createUsuarioDto.senha,
      Number(process.env.SALT_ROUNDS),
    );

    const novoUsuario: Usuario = await this.prismaService.usuario.create({
      data: createUsuarioDto,
    });

    return {
      id: novoUsuario.id,
      nome: novoUsuario.nome,
    };
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuarioAtualizado: Usuario = await this.prismaService.usuario.update({
      where: { id },
      data: updateUsuarioDto,
    });

    return {
      id: usuarioAtualizado.id,
      nome: usuarioAtualizado.nome,
    };
  }

  async remove(id: number) {
    await this.prismaService.usuario.delete({
      where: { id },
    });

    return {
      message: `Usuário com id ${id} removido com sucesso`,
    };
  }
}
