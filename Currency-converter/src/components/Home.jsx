import React, { useState, useEffect } from "react";
import CurrencySelector from "./CurrencySelector";
import axios from "axios";

const Home = ({ fromCurrency, toCurrency, setFromCurrency, setToCurrency }) => {
  const [fromRate, setFromRate] = useState(1);
  const [toRate, setToRate] = useState(1);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        );
        setFromRate(1);
        setToRate(response.data.rates[toCurrency]);
      } catch (error) {
        console.error("Error fetching exchange rate", error);
      }
    };
    if (fromCurrency && toCurrency) {
      fetchExchangeRate();
    }
  }, [fromCurrency, toCurrency]);

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto mt-5">
      <div className="flex justify-between w-full">
        <CurrencySelector
          selectedCurrency={fromCurrency}
          onCurrencyChange={setFromCurrency}
          exchangeRate={fromRate}
        />
        <CurrencySelector
          selectedCurrency={toCurrency}
          onCurrencyChange={setToCurrency}
          exchangeRate={toRate}
        />
      </div>
    </div>
  );
};

export default Home;
