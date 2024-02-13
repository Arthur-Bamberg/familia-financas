import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GruposCartoesService } from './grupos-cartoes.service';
import { CreateGrupoCartaoDto } from './dto/create-grupo-cartao.dto';
import { UpdateGrupoCartaoDto } from './dto/update-grupo-cartao.dto';

@Controller('grupos-cartoes')
export class GruposCartoesController {
  constructor(private readonly gruposCartoesService: GruposCartoesService) {}

  @Post()
  async create(@Body() createGrupoCartaoDto: CreateGrupoCartaoDto) {
    return await this.gruposCartoesService.create(createGrupoCartaoDto);
  }

  @Get()
  findAll() {
    return this.gruposCartoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gruposCartoesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGrupoCartaoDto: UpdateGrupoCartaoDto,
  ) {
    return this.gruposCartoesService.update(+id, updateGrupoCartaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gruposCartoesService.remove(+id);
  }
}
