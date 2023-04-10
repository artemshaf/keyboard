import { Role } from './../../role/models/role.model';
import { UserRole } from './../../role/models/user-role.model';
import { ApiProperty } from '@nestjs/swagger';
import {
  Model,
  Column,
  Table,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';

interface IUserCreationAttributes {
  email: string;
  password: string;
}

@Table
export class User extends Model<User, IUserCreationAttributes> {
  @ApiProperty({ example: '1', description: 'ID пользователя' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Артем',
    description: 'Имя',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({
    example: 'Яковцев',
    description: 'Фамилия',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  surname: string;

  @ApiProperty({
    example: 'example@gmail.com',
    description: 'Почтовый адрес пользователя',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @ApiProperty({
    example: '3bcx21982149fas',
    description: 'Пароль пользователя',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[];
}
