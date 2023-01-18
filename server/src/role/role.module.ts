import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { Role } from './models/role.model';
import { User } from '../user/models/user.model';
import { UserRole } from './models/user-role.model';

@Module({
  imports: [SequelizeModule.forFeature([Role, User, UserRole])],
  providers: [RoleService],
  controllers: [RoleController],
  exports: [RoleService],
})
export class RoleModule {}
