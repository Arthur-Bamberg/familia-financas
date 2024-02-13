import { Test, TestingModule } from '@nestjs/testing';
import { GruposCartoesController } from './grupos-cartoes.controller';
import { GruposCartoesService } from './grupos-cartoes.service';

describe('GruposCartoesController', () => {
  let controller: GruposCartoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GruposCartoesController],
      providers: [GruposCartoesService],
    }).compile();

    controller = module.get<GruposCartoesController>(GruposCartoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
