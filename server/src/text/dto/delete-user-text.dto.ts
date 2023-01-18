import { IsNumber } from 'class-validator';

export class DeleteUserTextDto {
  @IsNumber()
  readonly textId: number;

  @IsNumber()
  readonly userId: number;
}
