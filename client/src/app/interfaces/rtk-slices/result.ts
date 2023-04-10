import { ICreateResultDto } from "../rtk-dto";
import { TStatus } from "./status";

export interface IResultInitial {
  status: TStatus;
  results: ICreateResultDto[];
}
