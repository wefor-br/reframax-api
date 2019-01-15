import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PlanejamentosModule } from './planejamentos/planejamentos.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [PlanejamentosModule],
  providers: [AppService],
})
export class AppModule {}
