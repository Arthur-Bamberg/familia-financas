import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosCartoesController } from './usuarios-cartoes.controller';
import { UsuariosCartoesService } from './usuarios-cartoes.service';

describe('UsuariosCartoesController', () => {
  let controller: UsuariosCartoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosCartoesController],
      providers: [UsuariosCartoesService],
    }).compile();

    controller = module.get<UsuariosCartoesController>(
      UsuariosCartoesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
