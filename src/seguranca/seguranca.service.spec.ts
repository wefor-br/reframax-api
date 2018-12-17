import { Test, TestingModule } from '@nestjs/testing';
import { SegurancaService } from './seguranca.service';

describe('SegurancaService', () => {
  let service: SegurancaService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SegurancaService],
    }).compile();
    service = module.get<SegurancaService>(SegurancaService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
