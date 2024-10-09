import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactCountryFlag from "react-country-flag";

const currencyToCountryMap = {
  USD: "US",
  EUR: "EU",
  NGN: "NG", // Add more mappings as necessary
};

const CurrencySelector = ({ selectedCurrency, onCurrencyChange }) => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        setExchangeRates(response.data.rates);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching exchange rates", error);
      }
    };
    fetchExchangeRates();
  }, []);

  const handleCurrencyChange = (event) => {
    onCurrencyChange(event.target.value);
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <label htmlFor="currency-select" className="block mb-2">
            Select Currency
          </label>
          <select
            id="currency-select"
            onChange={handleCurrencyChange}
            value={selectedCurrency}
            className="px-4 py-2 border border-gray-400 rounded shadow"
          >
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>

          <div className="mt-5 flex items-center">
            <ReactCountryFlag
              countryCode={currencyToCountryMap[selectedCurrency] || "US"}
              svg
              style={{
                width: "3em",
                height: "3em",
                marginRight: "10px",
              }}
              title={selectedCurrency}
            />
            <span>
              {selectedCurrency}: {exchangeRates[selectedCurrency]}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default CurrencySelector;
