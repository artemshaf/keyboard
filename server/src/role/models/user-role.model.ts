import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../../user/models/user.model';
import { Role } from './role.model';

@Table({ createdAt: false, updatedAt: false })
export class UserRole extends Model<UserRole> {
  @ApiProperty({ example: '1', description: 'ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '215', description: 'ID пользователя' })
  @ForeignKey(() => User)
  @Column({ type: DataType.NUMBER, allowNull: false })
  userId: number;

  @ApiProperty({ example: '23', description: 'ID роли' })
  @ForeignKey(() => Role)
  @Column({ type: DataType.NUMBER, allowNull: false })
  roleId: number;
}
