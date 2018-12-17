import { Test, TestingModule } from '@nestjs/testing';
import { PlanejamentosController } from './planejamentos.controller';

describe('Planejamentos Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [PlanejamentosController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: PlanejamentosController = module.get<PlanejamentosController>(PlanejamentosController);
    expect(controller).toBeDefined();
  });
});
