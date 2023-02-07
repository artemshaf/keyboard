import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, HttpStatus } from '@nestjs/common';

import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { User } from '../user/models/user.model';
import { Get, Req, UseGuards } from '@nestjs/common/decorators';
import { AccessTokenGuard } from './guards/access-token.guard';
import { IsPublic } from './decorators/public.decorator';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { CurrentUser } from '../token/decorators/current-user.decorator';
import { JwtPayloadWithRefrToken } from './types';

@ApiTags('Авторизация(Auth)')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Залогиниться' })
  @ApiResponse({ status: HttpStatus.OK, type: User })
  @IsPublic()
  @Post('/login')
  async login(@Body() userDto: CreateUserDto) {
    console.log(1);
    return this.authService.login(userDto);
  }

  @ApiOperation({ summary: 'Зарегистрироваться' })
  @ApiResponse({
    status: HttpStatus.OK,
  })
  @Post('/registration')
  async registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }

  @ApiOperation({ summary: 'Разлогиниться' })
  @ApiResponse({ status: HttpStatus.OK, type: User })
  @UseGuards(AccessTokenGuard)
  @Post('/logout')
  async logout(@Req() req: Request) {
    const { userId } = req.body as any;

    return this.authService.logout(userId);
  }

  @IsPublic()
  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  refreshTokens(@CurrentUser() user: JwtPayloadWithRefrToken) {
    return this.authService.refreshTokens(user.userId, user.refreshToken);
  }
}
