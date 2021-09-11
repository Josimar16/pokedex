import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import connection from './shared/infra/typeorm';
import {AccountsModule} from "./modules/accounts/accounts.module";

@Module({
  imports: [
      ConfigModule.forRoot({
        load: [connection]
      }),
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (config: ConfigService) =>
            config.get<TypeOrmModuleOptions>('database'),
      }),

      AccountsModule
  ],
})
export class AppModule {}
