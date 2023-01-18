import { IsNumber, IsString } from 'class-validator';

export class AddRoleUserDto {
  @IsString()
  readonly value: string;

  @IsNumber()
  readonly userId: number;
}
