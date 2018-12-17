import { Module } from '@nestjs/common';
import { PlanejamentosController } from './planejamentos.controller';
import { PassportModule } from '@nestjs/passport';
import { SegurancaModule } from '../seguranca/seguranca.module';

@Module({
  imports: [PassportModule, SegurancaModule],
  controllers: [PlanejamentosController],
})
export class PlanejamentosModule {}
