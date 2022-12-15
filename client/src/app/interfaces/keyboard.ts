import { TStatus } from "./status";

export interface IHistory {
  wrong: number[];
  correct: number[];
}

export interface IKeyboard {
  status: TStatus | "pause";
  text: string;
  history: IHistory;
}
