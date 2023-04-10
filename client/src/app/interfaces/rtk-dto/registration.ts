import { ITokens } from "../token";
import { IAccount } from "./account";

export interface IRegistrationDto {
  email: string;
  password: string;
  name: string;
  surname: string;
}

export interface IRegisrationFirstData
  extends Pick<IRegistrationDto, "email"> {}

export interface IRegisrationSecondData
  extends Omit<IRegistrationDto, "email"> {}

export interface IRegistrationResponseDto {
  account: IAccount;
  tokens: ITokens;
}
