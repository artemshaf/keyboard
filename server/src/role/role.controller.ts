import { RoleService } from './role.service';
import { Controller, Post, Get, Body, Param, HttpStatus } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from './models/role.model';

@ApiTags('Роль(role)')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @ApiOperation({ summary: 'Получение роли по значению' })
  @ApiResponse({ status: HttpStatus.OK, type: Role })
  @Get('/:value')
  getRoleByValye(@Param('value') value: string) {
    return this.roleService.getRoleByValye(value);
  }

  @ApiOperation({ summary: 'Получить все роли' })
  @ApiResponse({ status: HttpStatus.OK, type: [Role] })
  @Get('')
  getAllRoles() {
    return this.roleService.getAllRoles();
  }

  @ApiOperation({ summary: 'Создание роли по ID' })
  @ApiResponse({ status: HttpStatus.OK, type: Role })
  @Post('/create')
  createRole(@Body() roleDto: CreateRoleDto) {
    return this.roleService.createRole(roleDto);
  }
}
