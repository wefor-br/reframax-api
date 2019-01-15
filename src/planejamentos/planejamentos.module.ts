import { Module } from '@nestjs/common';
import { PlanejamentosController } from './planejamentos.controller';
import { PassportModule } from '@nestjs/passport';
import { SegurancaModule } from '../seguranca/seguranca.module';
import { DatabaseModule } from 'database/database.module';

@Module({
  imports: [PassportModule, SegurancaModule, DatabaseModule],
  controllers: [PlanejamentosController],
})
export class PlanejamentosModule {}
