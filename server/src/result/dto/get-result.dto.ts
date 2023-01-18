import { IsEnum, IsNumber, IsOptional } from 'class-validator';
import { ResultEnum } from '../models/result.model';

export class GetResultDto {
  @IsNumber()
  @IsOptional()
  userId: number;

  @IsNumber()
  @IsOptional()
  textId: number;

  @IsEnum(ResultEnum, { each: true })
  @IsOptional()
  type: string;
}
