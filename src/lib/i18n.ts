import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { content } from "@/config/content";

const isServer = typeof window === "undefined";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: content.es,
    },
    en: {
      translation: content.en,
    },
  },
  fallbackLng: "en",
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
  // Disable suspense for SSR compatibility
  react: {
    useSuspense: false,
  },
});

// Only detect language from localStorage on client
if (!isServer) {
  const savedLang = localStorage.getItem("i18nextLng");
  if (savedLang && (savedLang === "en" || savedLang === "es")) {
    i18n.changeLanguage(savedLang);
  }
}

export default i18n;
