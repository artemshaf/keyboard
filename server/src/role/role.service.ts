import { Role } from './models/role.model';
import { CreateRoleDto } from './dto/create-role.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

  async getAllRoles() {
    const roles = this.roleRepository.findAll();
    return roles;
  }

  async getRoleByValye(value: string) {
    const role = this.roleRepository.findOne({ where: { value } });
    return role;
  }

  async createRole(roleDto: CreateRoleDto) {
    const role = this.roleRepository.create(roleDto);
    return role;
  }
}
