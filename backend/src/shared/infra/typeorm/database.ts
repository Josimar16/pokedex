import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const database: TypeOrmModuleOptions = {
    type: 'postgres',
    port: Number(process.env.DATABASE_PORT) || 5432,
    host: process.env.DATABASE_HOST || 'localhost',
    username: process.env.DATABASE_USERNAME || 'pokedex-user',
    password: process.env.DATABASE_PASSWORD || 'pokedex-pass',
    database: process.env.DATABASE_NAME || 'pokedex',
    entities: [
        path.resolve(
            __dirname,
            '..',
            '..',
            '..',
            'modules',
            '**',
            'infra',
            'typeorm',
            'entities',
            '*',
        ),
    ],
    synchronize: true,
    migrations: [
        path.resolve(__dirname, 'migrations', '*')
    ],
    cli: {
        migrationsDir: path.resolve(__dirname, 'migrations'),
    },
    logging: ['error', 'warn']
}