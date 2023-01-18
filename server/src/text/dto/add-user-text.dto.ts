import { IsNumber } from 'class-validator';

export class AddUserTextDto {
  @IsNumber()
  readonly textId: number;

  @IsNumber()
  readonly userId: number;
}
