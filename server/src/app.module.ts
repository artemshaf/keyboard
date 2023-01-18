import { AuthModule } from './auth/auth.module';
import { SequelizeConfigService } from './configs/db/sequelizeconfig.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize/dist';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './configs/db/config';
import { ResultModule } from './result/result.module';
import { TextModule } from './text/text.module';
import { UserModule } from './user/user.module';
import { LanguageModule } from './language/language.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useClass: SequelizeConfigService,
    }),
    TextModule,
    ResultModule,
    UserModule,
    LanguageModule,
    AuthModule,
    RoleModule,
  ],
  controllers: [],
  providers: [SequelizeConfigService],
})
export class AppModule {}
