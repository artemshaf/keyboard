import { TStatus } from "./status";

export interface IHistory {
  [key: number]: boolean | null;
}

export interface IKeyboard {
  status: TStatus | "pause";
  text: string;
  position: number;
  history: IHistory;
}

export type QualityWord = "correct" | "current" | "wrong" | "next";
export type QualityChar = "correct" | "current" | "wrong" | "next";
