
import { Connection } from 'mongoose';

import { PlanejamentoSchema } from './planejamento.schema';
import { PLANEJAMENTO_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const planejamentoProviders = [
    {
        provide: PLANEJAMENTO_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Planejamento', PlanejamentoSchema),
        inject: [DB_PROVIDER],
    },
];