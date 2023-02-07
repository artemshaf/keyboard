import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { RefreshToken } from './models/refresh-token.model';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { PassportModule } from '@nestjs/passport';
import { RefreshTokenStrategy } from '../auth/strategies/refresh-token.strategy';

@Module({
  imports: [
    JwtModule.register({}),
    PassportModule.register({
      defaultStrategy: 'jwt-refresh',
    }),
    SequelizeModule.forFeature([RefreshToken]),
    ConfigModule,
  ],
  exports: [TokenService],
  providers: [TokenService, RefreshTokenStrategy],
  controllers: [TokenController],
})
export class TokenModule {}
