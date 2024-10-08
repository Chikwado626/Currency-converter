import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Define translations for each language
const resources = {
  en: {
    translation: {
      welcome: "Welcome to our website!",
      select_language: "Select Language",
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue sur notre site Web!",
      select_language: "Choisir la langue",
    },
  },
  es: {
    translation: {
      welcome: "¡Bienvenido a nuestro sitio web!",
      select_language: "Seleccionar idioma",
    },
  },
  ru: {
    translation: {
      welcome: "Добро пожаловать на наш сайт!",
      select_language: "Выберите язык",
    },
  },
  ar: {
    translation: {
      welcome: "مرحبًا بك في موقعنا!",
      select_language: "اختر اللغة",
    },
  },
  zh: {
    translation: {
      welcome: "欢迎访问我们的网站！",
      select_language: "选择语言",
    },
  },
};

// Initialize i18next
i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
