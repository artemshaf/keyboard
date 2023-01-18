import { IsEnum, IsNumber } from 'class-validator';
import { ResultEnum } from '../models/result.model';

export class CreateResultDto {
  @IsNumber()
  userId: number;

  @IsNumber()
  textId: number;

  @IsNumber({}, { each: true })
  correct: Array<number>;

  @IsNumber({}, { each: true })
  wrong: Array<number>;

  @IsEnum(ResultEnum, { each: true })
  type: string;
}
