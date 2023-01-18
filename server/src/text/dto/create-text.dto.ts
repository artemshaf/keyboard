import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateTextDto {
  @IsString()
  @MaxLength(2000)
  @MinLength(200)
  readonly text: string;

  @IsNotEmpty()
  @IsNumber()
  readonly languageId: number;
}
