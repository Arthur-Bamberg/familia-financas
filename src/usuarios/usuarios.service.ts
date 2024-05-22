import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsuariosService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    createUsuarioDto.senha = await bcrypt.hash(
      createUsuarioDto.senha,
      Number(process.env.SALT_ROUNDS),
    );

    const novoUsuario: Usuario = await this.prismaService.usuarios.create({
      data: createUsuarioDto,
    });

    return {
      id: novoUsuario.id,
      nome: novoUsuario.nome,
    };
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuarioAtualizado: Usuario = await this.prismaService.usuarios.update(
      {
        where: { id },
        data: updateUsuarioDto,
      },
    );

    return {
      id: usuarioAtualizado.id,
      nome: usuarioAtualizado.nome,
    };
  }

  async login(email: string, senha: string) {
    const usuario = await this.prismaService.usuarios.findUnique({
      where: { email },
    });

    if (!usuario) {
      return {
        message: 'Usuário não encontrado',
      };
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (!senhaCorreta) {
      return {
        message: 'Senha incorreta',
      };
    }

    return {
      message: 'Usuário logado com sucesso',
    };
  }

  async remove(id: number) {
    await this.prismaService.usuarios.delete({
      where: { id },
    });

    return {
      message: `Usuário com id ${id} removido com sucesso`,
    };
  }
}
