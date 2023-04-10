export interface ICreateTextDto {
  readonly text: string;
  readonly languageId: number;
}

export interface IGetAllTextsByLanguageIdDto {
  readonly languageId: number;
}

export interface IAddTextToUserDto {
  readonly textId: number;
  readonly userId: number;
}

export interface IDeleteTextFromUserDto {
  readonly textId: number;
  readonly userId: number;
}
