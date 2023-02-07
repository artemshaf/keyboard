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
import { TokenModule } from './token/token.module';
import { APP_GUARD } from '@nestjs/core';
import { AccessTokenGuard } from './auth/guards/access-token.guard';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useClass: SequelizeConfigService,
    }),
    UserModule,
    RoleModule,
    AuthModule,
    LanguageModule,
    TextModule,
    ResultModule,
    TokenModule,
  ],
  controllers: [],
  providers: [
    SequelizeConfigService,
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },
  ],
})
export class AppModule {}
