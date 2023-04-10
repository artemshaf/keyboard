import { RoleService } from './../role/role.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.model';
import { AddRoleUserDto } from './dto/add-role-user.dto';
import {
  ROLE_NOT_EXISTS,
  USER_DEFAULR_ROLE,
  USER_NOT_EXISTS,
  USER_ROLE,
  USER_ROLES,
} from './user.constants';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RoleService,
  ) {}

  async create(userDto: CreateUserDto) {
    const user = await this.userRepository.create(userDto);
    const role = await this.roleService.getRoleByValye(USER_DEFAULR_ROLE);
    await user.$set(USER_ROLES, [role.id]);
    user.roles = [role];
    return user;
  }

  async getAllUsers() {
    const users = this.userRepository.findAll();
    return users;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      include: {
        all: true,
      },
    });
    if (!user) {
      throw new HttpException(USER_NOT_EXISTS, HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async getUserById(userId: number) {
    const user = await this.userRepository.findByPk(userId);
    return user;
  }

  async addRole(useRoleDto: AddRoleUserDto) {
    const user = await this.userRepository.findByPk(useRoleDto.userId);
    if (!user) {
      throw new HttpException(USER_NOT_EXISTS, HttpStatus.NOT_FOUND);
    }
    const role = await this.roleService.getRoleByValye(useRoleDto.value);
    if (!role) {
      throw new HttpException(ROLE_NOT_EXISTS, HttpStatus.NOT_FOUND);
    }
    await user.$add(USER_ROLE, role.id);
  }
}
