import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../../user/models/user.model';

interface ICreationRefreshTokenAttributes {
  userId: number;
  refreshToken: string;
}

@Table
export class RefreshToken extends Model<
  RefreshToken,
  ICreationRefreshTokenAttributes
> {
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
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ApiProperty({
    example: 'falsflsalfasl/asfkk312.afszsl^71213/',
    description: 'RefreshToken',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  refreshToken: string;
}
