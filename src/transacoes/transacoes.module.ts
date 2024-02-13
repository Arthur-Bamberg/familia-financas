import { Module } from '@nestjs/common';
import { TransacoesService } from './transacoes.service';
import { TransacoesController } from './transacoes.controller';
import { TransacoesRepository } from './transacoes.repository';
import { PrismaService } from 'src/prisma.service';
import { GruposCartoesModule } from 'src/grupos-cartoes/grupos-cartoes.module';

@Module({
  controllers: [TransacoesController],
  providers: [TransacoesService, TransacoesRepository, PrismaService],
  imports: [GruposCartoesModule],
})
export class TransacoesModule {}
