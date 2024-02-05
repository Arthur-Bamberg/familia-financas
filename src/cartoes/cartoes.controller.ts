import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CartoesService } from './cartoes.service';
import { CreateCartaoDto } from './dto/create-cartao.dto';
import { UpdateCartaoDto } from './dto/update-cartao.dto';

@Controller('cartoes')
export class CartoesController {
  constructor(private readonly cartoesService: CartoesService) {}

  @Post()
  async create(@Body() createCartaoDto: CreateCartaoDto) {
    return await this.cartoesService.create(createCartaoDto);
  }

  @Get()
  async findAll() {
    return await this.cartoesService.findAll();
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCartaoDto: UpdateCartaoDto,
  ) {
    return this.cartoesService.update(+id, updateCartaoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.cartoesService.remove(+id);
  }
}
