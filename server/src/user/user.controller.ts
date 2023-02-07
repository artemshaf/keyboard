import { Body, Controller, Post, Get, HttpStatus } from '@nestjs/common';
import { Patch, UseGuards } from '@nestjs/common/decorators';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AccessTokenGuard } from '../auth/guards/access-token.guard';
import { Roles } from '../auth/role.decorator';
import { RolesAuthGuard } from '../auth/guards/rolesauth.guard';
import { AddRoleUserDto } from './dto/add-role-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.model';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: HttpStatus.OK, type: User })
  @Post('/create')
  async create(@Body() userDto: CreateUserDto) {
    return this.userService.create(userDto);
  }

  @ApiOperation({ summary: 'Получить всех пользователей' })
  @ApiResponse({ status: HttpStatus.OK, type: Array<User> })
  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({ summary: 'Получить пользователя по почте' })
  @ApiResponse({ status: HttpStatus.OK, type: User })
  @Get('/email')
  async getUserByEmail(@Body() email: any) {
    return this.userService.getUserByEmail(email.email);
  }

  @ApiOperation({ summary: 'Выдать роль' })
  @ApiResponse({ status: HttpStatus.OK, type: [User] })
  @Roles('admin')
  @UseGuards(RolesAuthGuard)
  @Patch('/role')
  addRole(@Body() addRoleUserDto: AddRoleUserDto) {
    return this.userService.addRole(addRoleUserDto);
  }
}
