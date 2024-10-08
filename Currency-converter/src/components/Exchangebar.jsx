import React from "react";
import CurrencySelector from "./CurrencySelector";

const Home = ({ fromCurrency, toCurrency, setFromCurrency, setToCurrency }) => {
  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto mt-5">
      <div className="flex justify-between w-full">
        <CurrencySelector
          selectedCurrency={fromCurrency}
          onCurrencyChange={setFromCurrency}
        />
        <CurrencySelector
          selectedCurrency={toCurrency}
          onCurrencyChange={setToCurrency}
        />
      </div>
    </div>
  );
};

export default Home;
