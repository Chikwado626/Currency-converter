import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactCountryFlag from "react-country-flag";

// Map of currency codes to country codes
const currencyToCountryMap = {
  USD: "US", // United States Dollar
  EUR: "EU", // Euro
  NGN: "NG", // Nigerian Naira
  GBP: "GB", // British Pound
  JPY: "JP", // Japanese Yen
  CNY: "CN", // Chinese Yuan
  RUB: "RU", // Russian Ruble
  AED: "AE", // UAE Dirham
  AUD: "AU", // Australian Dollar
  CAD: "CA", // Canadian Dollar
  // Add more mappings as necessary
};

const CurrencySelector = ({ selectedCurrency, onCurrencyChange }) => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch exchange rates when the component mounts
  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/USD" // Replace with your preferred API
        );
        setExchangeRates(response.data.rates);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching exchange rates", error);
      }
    };

    fetchExchangeRates();
  }, []);

  // Handle currency selection change
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
              countryCode={currencyToCountryMap[selectedCurrency] || "US"} // Default to US if not found
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
