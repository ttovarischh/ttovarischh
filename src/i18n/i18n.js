import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en/translation.json";
import ruTranslations from "./locales/ru/translation.json";

const savedLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
      nav: enTranslations.nav, // Add this
    },
    ru: {
      translation: ruTranslations,
      nav: ruTranslations.nav, // Add this
    },
  },
  ns: ["translation", "nav"], // Explicitly specify namespaces
  defaultNS: "translation", // Still use translation as default
  lng: savedLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});

export default i18n;
