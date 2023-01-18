import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, HttpStatus } from '@nestjs/common';

import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { User } from '../user/models/user.model';

@ApiTags('Авторизация(Auth)')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Залогиниться' })
  @ApiResponse({ status: HttpStatus.OK, type: User })
  @Post('/login')
  async login(@Body() userDto: CreateUserDto) {
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
}
