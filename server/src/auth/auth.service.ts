import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import {
  HttpException,
  UnauthorizedException,
} from '@nestjs/common/exceptions';
import { compare, hash } from 'bcrypt';
import { LoginDto } from '../dto/login.dto';
import { TokenService } from '../token/token.service';
import { CreateUserDto } from '../user/dto/create-user.dto';

import { UserService } from './../user/user.service';
import { USER_EXISTS, USER_NOT_EXISTS } from './auth.constants';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private tokenService: TokenService,
  ) {}

  async login(userDto: LoginDto) {
    const user = await this.validateUser(userDto);
    const tokens = await this.tokenService.generateTokens(user.id, user.email);
    await this.tokenService.updateRefreshToken(user.id, tokens.refreshToken);
    return {
      account: {
        id: user.id,
        name: user.name,
        surname: user.surname,
      },
      tokens,
    };
  }

  async logout(userId: number) {
    return this.tokenService.updateRefreshToken(userId, '');
  }

  async registration(userDto: CreateUserDto) {
    let user;
    try {
      user = await this.userService.getUserByEmail(userDto.email);

      if (user) {
        throw new HttpException(USER_EXISTS, HttpStatus.BAD_REQUEST);
      }
    } catch (error) {}

    const hashPassword = await hash(userDto.password, 6);
    const hashedUser = await this.userService.create({
      ...userDto,
      password: hashPassword,
    });
    const tokens = await this.tokenService.generateTokens(
      hashedUser.id,
      hashedUser.email,
    );
    await this.tokenService.updateRefreshToken(
      hashedUser.id,
      tokens.refreshToken,
    );
    return {
      account: {
        id: hashedUser.id,
        name: hashedUser.name,
        surname: hashedUser.surname,
      },
      tokens,
    };
  }

  private async validateUser(
    userDto: Pick<CreateUserDto, 'email' | 'password'>,
  ) {
    const user = await this.userService.getUserByEmail(userDto.email);
    if (!user) {
      throw new UnauthorizedException({
        message: USER_NOT_EXISTS,
      });
    }
    const passwordEqauls = await compare(userDto.password, user.password);
    if (!passwordEqauls) {
      throw new UnauthorizedException({
        message: USER_NOT_EXISTS,
      });
    }
    return user;
  }

  async refreshTokens(userId: number, refreshToken: string) {
    const user = await this.userService.getUserById(userId);

    if (!user) {
      throw new UnauthorizedException({
        message: USER_NOT_EXISTS,
      });
    }

    const userToken = await this.tokenService.getRefreshTokenByUserId(userId);

    if (!userToken) {
      throw new UnauthorizedException({
        message: USER_NOT_EXISTS,
      });
    }

    const refreshTokenMatch = await compare(
      refreshToken,
      userToken.refreshToken,
    );

    if (!refreshTokenMatch) throw new ForbiddenException('Access Denied');

    const tokens = await this.tokenService.generateTokens(user.id, user.email);

    const hashedRefreshToken = await hash(tokens.refreshToken, 6);

    await this.tokenService.updateRefreshToken(user.id, hashedRefreshToken);

    return tokens;
  }
}
