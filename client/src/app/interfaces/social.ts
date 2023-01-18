interface ISocialCommon {
  link: string;
}

interface ITextSocial extends ISocialCommon {
  text: string;
  icon?: never;
}

interface IIconSocial extends ISocialCommon {
  text?: never;
  icon: JSX.Element;
}

export type ISocial = ITextSocial | IIconSocial;
