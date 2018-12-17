import { Test, TestingModule } from '@nestjs/testing';
import { SegurancaController } from './seguranca.controller';

describe('Seguranca Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [SegurancaController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: SegurancaController = module.get<SegurancaController>(SegurancaController);
    expect(controller).toBeDefined();
  });
});
