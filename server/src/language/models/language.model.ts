import { ApiProperty } from '@nestjs/swagger';
import { Model, Column, Table, DataType } from 'sequelize-typescript';

@Table({ createdAt: false, updatedAt: false })
export class Language extends Model {
  @ApiProperty({
    example: '2',
    description: 'ID языка',
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @ApiProperty({
    example: 'Русский',
    description: 'Язык для текстов',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  language: string;
}
