import { TStatus } from "./status";

export interface IHistory {
  wrong: Array<number>;
  correct: Array<number>;
}

export interface IKeyboardInitial {
  status: TStatus | "pause";
  text: string;
  position: number;
  history: IHistory;
  type: KeyboardType;
}
export type KeyboardType = "Word" | "Letter";
export type QualityWord = "correct" | "current" | "wrong" | "next";
export type QualityChar = "correct" | "current" | "wrong" | "next";
