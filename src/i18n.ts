import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: {
        welcome: "Bienvenido a nuestra aplicación",
        language: "Idioma",
        changeLanguage: "Cambiar idioma",
      },
    },
    en: {
      translation: {
        welcome: "Welcome to our application",
        language: "Language",
        changeLanguage: "Change language",
      },
    },
    de: {
      translation: {
        welcome: "Willkommen in unserer Anwendung",
        language: "Sprache",
        changeLanguage: "Sprache ändern",
      },
    },
  },
  lng: "es", // Idioma por defecto
  fallbackLng: "es",
  interpolation: { escapeValue: false },
});

export default i18n;
