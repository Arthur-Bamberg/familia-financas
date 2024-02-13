import { Test, TestingModule } from '@nestjs/testing';
import { GruposCartoesService } from './grupos-cartoes.service';

describe('GruposCartoesService', () => {
  let service: GruposCartoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GruposCartoesService],
    }).compile();

    service = module.get<GruposCartoesService>(GruposCartoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
