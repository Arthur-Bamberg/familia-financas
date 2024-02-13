import { PartialType } from '@nestjs/swagger';
import { CreateGrupoCartaoDto } from './create-grupo-cartao.dto';

export class UpdateGrupoCartaoDto extends PartialType(CreateGrupoCartaoDto) {}
