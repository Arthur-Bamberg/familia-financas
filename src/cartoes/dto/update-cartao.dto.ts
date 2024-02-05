import { PartialType } from '@nestjs/swagger';
import { CreateCartaoDto } from './create-cartao.dto';

export class UpdateCartaoDto extends PartialType(CreateCartaoDto) {}
