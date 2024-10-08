import React from "react";
import { useTranslation } from "react-i18next";
// import i18n from "../i18n"; // Import the i18n config

const LanguageSwitcher = () => {
  const { t } = useTranslation(); // Hook from react-i18next to access translations

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex items-center gap-4">
      <span>{t("select_language")}: </span>
      <button
        onClick={() => changeLanguage("en")}
        className="px-2 py-1 border rounded"
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("fr")}
        className="px-2 py-1 border rounded"
      >
        French
      </button>
      <button
        onClick={() => changeLanguage("es")}
        className="px-2 py-1 border rounded"
      >
        Spanish
      </button>
      <button
        onClick={() => changeLanguage("ru")}
        className="px-2 py-1 border rounded"
      >
        Russian
      </button>
      <button
        onClick={() => changeLanguage("ar")}
        className="px-2 py-1 border rounded"
      >
        Arabic
      </button>
      <button
        onClick={() => changeLanguage("zh")}
        className="px-2 py-1 border rounded"
      >
        Chinese
      </button>
    </div>
  );
};

export default LanguageSwitcher;
