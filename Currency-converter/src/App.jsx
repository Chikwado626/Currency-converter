import React from "react";
import "./App.css";
import { Headers } from "./components/Headers";
import Home from "./components/Home";
import Exchangebar from "./components/Exchangebar";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher"; // Import the language switcher
import { useTranslation } from "react-i18next"; // Import translation hook

import "./i18n"; // Import the i18n configuration

function App() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <Headers />
      <main className="flex-grow">
        <div className="max-w-2xl mx-auto mt-5 text-center">
          <h1 className="text-2xl font-bold">{t("welcome")}</h1>
          {/* <LanguageSwitcher /> */}
        </div>
        <Home />
        <Exchangebar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
