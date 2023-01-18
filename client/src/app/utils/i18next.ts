import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

const fallbackLng = localStorage.getItem("fallbackLng") || "ru";

export default i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng,
    saveMissing: true,
    interpolation: {
      escapeValue: true,
    },
  });
