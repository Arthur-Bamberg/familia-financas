import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsuariosCartoesService } from './usuarios-cartoes.service';
import { CreateUsuarioCartaoDto } from './dto/create-usuario-cartao.dto';
import { UpdateUsuarioCartaoDto } from './dto/update-usuario-cartao.dto';

@Controller('usuarios-cartoes')
export class UsuariosCartoesController {
  constructor(
    private readonly usuariosCartoesService: UsuariosCartoesService,
  ) {}

  @Post()
  async create(@Body() createUsuarioCartaoDto: CreateUsuarioCartaoDto) {
    return await this.usuariosCartoesService.create(createUsuarioCartaoDto);
  }

  @Get()
  findAll() {
    return this.usuariosCartoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosCartoesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUsuarioCartaoDto: UpdateUsuarioCartaoDto,
  ) {
    return this.usuariosCartoesService.update(+id, updateUsuarioCartaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosCartoesService.remove(+id);
  }
}
