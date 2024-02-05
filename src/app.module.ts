import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ConfigModule } from '@nestjs/config';
import { CartoesModule } from './cartoes/cartoes.module';

@Module({
  imports: [
    UsuariosModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CartoesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
