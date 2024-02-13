import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosCartoesService } from './usuarios-cartoes.service';

describe('UsuariosCartoesService', () => {
  let service: UsuariosCartoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuariosCartoesService],
    }).compile();

    service = module.get<UsuariosCartoesService>(UsuariosCartoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
