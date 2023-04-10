type TextType = "Word" | "Letter";

export interface ICreateResultDto {
  userId: number;

  textId: number;

  correct: Array<number>;

  wrong: Array<number>;

  type: TextType;
}

export interface IGetResultDto {
  userId: number;
  textId: number;
  type: TextType;
}

export interface IGetResultByParamsDto {
  userId: number;
  textId: number;
  type: TextType;
}
