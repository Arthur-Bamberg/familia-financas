import { PartialType } from '@nestjs/swagger';
import { CreateUsuarioCartaoDto } from './create-usuario-cartao.dto';

export class UpdateUsuarioCartaoDto extends PartialType(
  CreateUsuarioCartaoDto,
) {}
