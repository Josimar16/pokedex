import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const database: TypeOrmModuleOptions = {
    type: 'postgres',
    port: Number(process.env.DATABASE_PORT),
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
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
    synchronize: false,
    migrations: [
        path.resolve(__dirname, 'migrations', '*')
    ],
    cli: {},
    logging: ['error', 'warn']
}