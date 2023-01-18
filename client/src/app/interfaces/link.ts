interface ILinkCommon {
  link: string;
  text?: string;
  i18Key?: string;
}

interface ITextLink extends ILinkCommon {
  text: string;
  i18Key?: never;
}

interface ITranslateLink extends ILinkCommon {
  text?: never;
  i18Key: string;
}

export type ILink = ITextLink | ITranslateLink;
export interface componentVariant<T> {
  text: string;
  variantState: T;
}

export interface IRoute {
  path: string;
  element: JSX.Element;
}
