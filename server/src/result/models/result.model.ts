import { ApiProperty } from '@nestjs/swagger';
import { DataTypes } from 'sequelize';
import { Model, Column, Table } from 'sequelize-typescript';

export const ResultEnum: string[] = ['Word', 'Letter'];

type ResultCreationAttributes = {
  userId: number;
  textId: number;
  correct: Array<number>;
  wrong: Array<number>;
  type: string;
};

@Table
export class Result extends Model<Result, ResultCreationAttributes> {
  @ApiProperty({ example: '1', description: 'ID результата' })
  @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  })
  id: number;

  @ApiProperty({ example: '1412', description: 'ID пользователя' })
  @Column({ type: DataTypes.NUMBER, allowNull: false })
  userId: number;

  @ApiProperty({ example: '142', description: 'ID текста' })
  @Column({ type: DataTypes.NUMBER, allowNull: false })
  textId: number;

  @ApiProperty({ example: '[1,2,3,5]', description: 'Правильные позиции' })
  @Column({
    type: DataTypes.ARRAY(DataTypes.INTEGER),
  })
  correct: Array<number>;

  @ApiProperty({ example: '[1,4]', description: 'Неправильные позиции' })
  @Column({ type: DataTypes.ARRAY(DataTypes.INTEGER) })
  wrong: Array<number>;

  @ApiProperty({ example: ResultEnum[0], description: 'Тип результата' })
  @Column({ type: DataTypes.ENUM(...ResultEnum) })
  type: string;
}
