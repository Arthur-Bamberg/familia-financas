import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { OmitType } from '@nestjs/swagger';

export class UpdateUsuarioDto extends PartialType(
  OmitType(CreateUsuarioDto, ['email', 'senha']),
) {}
