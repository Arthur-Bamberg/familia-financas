import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ConfigModule } from '@nestjs/config';
import { CartoesModule } from './cartoes/cartoes.module';
import { GruposCartoesModule } from './grupos-cartoes/grupos-cartoes.module';
import { UsuariosCartoesModule } from './usuarios-cartoes/usuarios-cartoes.module';
import { TransacoesModule } from './transacoes/transacoes.module';
import { LojasModule } from './lojas/lojas.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsuariosModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CartoesModule,
    GruposCartoesModule,
    UsuariosCartoesModule,
    TransacoesModule,
    LojasModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
