import { ApiProperty } from '@nestjs/swagger';
import { Model, Column, Table, DataType } from 'sequelize-typescript';

type TextCreationAttributes = {
  text: string;
  languageId: number;
};

@Table
export class Text extends Model<Text, TextCreationAttributes> {
  @ApiProperty({ example: '1', description: 'ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Этот текст написан на русском языке',
    description: 'Текст для дополнения',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  text: string;

  @ApiProperty({
    example: '421',
    description: 'ID языка, на котором написан текст',
  })
  @Column({ type: DataType.NUMBER, allowNull: false })
  languageId: number;
}
