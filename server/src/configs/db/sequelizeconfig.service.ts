import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SequelizeOptionsFactory } from '@nestjs/sequelize';
import { SequelizeModuleOptions } from '@nestjs/sequelize/dist';
import { Language } from '../../language/models/language.model';
import { Result } from '../../result/models/result.model';
import { Role } from '../../role/models/role.model';
import { UserRole } from '../../role/models/user-role.model';
import { Text } from '../../text/models/text.model';
import { UserText } from '../../text/models/uset-text.model';
import { User } from '../../user/models/user.model';
import { EnumConfig } from '../enum/enumConfig';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createSequelizeOptions(): SequelizeModuleOptions {
    const {
      pg: { dialect, host, port, username, password, database },
    } = this.configService.get(EnumConfig.DATABASE);

    return {
      dialect,
      host,
      port,
      username,
      password,
      database,
      synchronize: true,
      autoLoadModels:
        this.configService.get('DATABASE_AUTO_LOAD_MODELS') || true,
    };
  }
}
