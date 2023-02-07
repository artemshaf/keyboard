import { ApiProperty } from '@nestjs/swagger';
import {
  Model,
  Column,
  Table,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';
import { User } from '../../user/models/user.model';
import { Text } from './text.model';

type UserTextCreationAttributes = {
  userId: number;
  textId: number;
};

@Table
export class UserText extends Model<UserText, UserTextCreationAttributes> {
  @ApiProperty({ example: '1', description: 'ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '23', description: 'ID пользователя' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @ApiProperty({ example: '1223', description: 'ID текста' })
  @ForeignKey(() => Text)
  @Column({ type: DataType.INTEGER, allowNull: false })
  textId: number;
}
