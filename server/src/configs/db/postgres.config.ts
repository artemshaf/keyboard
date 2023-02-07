import { registerAs } from '@nestjs/config/dist';
import { SequelizeModuleOptions } from '@nestjs/sequelize/dist';
import { Dialect } from 'sequelize';
import { EnumConfig } from '../enum/enumConfig';

export const pgConfig = registerAs(
  EnumConfig.DATABASE,
  (): SequelizeModuleOptions => {
    return {
      dialect: <Dialect>process.env.SQL_DIALECT || 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT || 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      ssl: true,
    };
  },
);
