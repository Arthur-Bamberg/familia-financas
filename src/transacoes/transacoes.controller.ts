import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TransacoesService } from './transacoes.service';
import { CreateTransacaoDto } from './dto/create-transacao.dto';
import { UpdateTransacaoDto } from './dto/update-transacao.dto';

@Controller('transacoes')
export class TransacoesController {
  constructor(private readonly transacoesService: TransacoesService) {}

  @Post()
  async create(@Body() createTransacaoDto: CreateTransacaoDto) {
    return await this.transacoesService.create(createTransacaoDto);
  }

  @Get()
  findAll() {
    return this.transacoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transacoesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransacaoDto: UpdateTransacaoDto,
  ) {
    return this.transacoesService.update(+id, updateTransacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transacoesService.remove(+id);
  }
}
