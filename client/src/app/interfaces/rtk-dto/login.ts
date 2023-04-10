import { ITokens } from "../token";
import { IAccount } from "./account";

export interface ILoginDto {
  email: string;
  password: string;
}

export interface ILoginResponseDto {
  account: IAccount;
  tokens: ITokens;
}
