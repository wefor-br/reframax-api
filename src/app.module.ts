import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PlanejamentosModule } from './planejamentos/planejamentos.module';
import { SegurancaModule } from './seguranca/seguranca.module';

@Module({
  imports: [PlanejamentosModule, SegurancaModule],
  providers: [AppService],
})
export class AppModule {}
