import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { hash } from 'bcrypt';
import { NOT_FOUND_TOKEN } from './constants';
import { RefreshToken } from './models/refresh-token.model';
import { IGenerateTokens } from './types';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel(RefreshToken)
    private readonly refreshTokenRepository: typeof RefreshToken,
    private readonly jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async getAllRefreshTokens() {
    return this.refreshTokenRepository.findAll();
  }

  async getRefreshTokenByUserId(userId: number) {
    const token = await this.refreshTokenRepository.findOne({
      where: { userId },
    });
    if (!token) {
      throw new NotFoundException(NOT_FOUND_TOKEN);
    }

    return token;
  }

  async updateRefreshToken(userId: number, refreshToken: string) {
    const token = await this.refreshTokenRepository.findOne({
      where: { userId },
    });
    const hashedRefreshToken = await hash(refreshToken, 6);
    if (!token) {
      return this.refreshTokenRepository.create({
        userId,
        refreshToken: hashedRefreshToken,
      });
    }

    return this.refreshTokenRepository.update(
      { userId, refreshToken: hashedRefreshToken },
      {
        where: {
          userId,
        },
      },
    );
  }

  async generateTokens(userId: number, email: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          userId: userId,
          email: email,
        },
        {
          secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
          expiresIn: '7d',
        },
      ),
      this.jwtService.signAsync(
        {
          userId: userId,
          email: email,
        },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: '60d',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
