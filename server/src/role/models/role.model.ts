import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../../user/models/user.model';
import { UserRole } from './user-role.model';

interface RoleCreationAttributes {
  value: string;
  description: string;
}

@Table({ createdAt: false, updatedAt: false })
export class Role extends Model<Role, RoleCreationAttributes> {
  @ApiProperty({ example: '1', description: 'ID роли' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Редактор', description: 'Значение роли' })
  @Column({ type: DataType.STRING, allowNull: false })
  value: string;

  @ApiProperty({ example: 'EDITOR', description: 'Описание роли' })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @BelongsToMany(() => User, () => UserRole)
  users: [];
}
