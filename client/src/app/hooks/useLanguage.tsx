import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ILanguages } from "@interfaces";
import { useTranslation } from "react-i18next";
import { languages as mockLanguages } from "@data";

interface IUseLanguageReturn {
  selectedLanguage?: string;
  languages?: ILanguages;
  setSelectedLanguage?: Dispatch<SetStateAction<string>>;
}

export const useLanguage = (
  languages: ILanguages = mockLanguages
): IUseLanguageReturn => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    () => languages[i18n.language].nativeName || "Russian"
  );

  useEffect(() => {
    setSelectedLanguage(languages[i18n.language].nativeName);
    localStorage.setItem("fallbackLng", i18n.language);
  }, [i18n.language]);

  return {
    languages,
    selectedLanguage,
    setSelectedLanguage,
  };
};
