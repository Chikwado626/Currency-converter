import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactCountryFlag from "react-country-flag";

// Extended map of currency codes to country codes
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
  INR: "IN", // Indian Rupee
  ZAR: "ZA", // South African Rand
  BRL: "BR", // Brazilian Real
  MXN: "MX", // Mexican Peso
  CHF: "CH", // Swiss Franc
  KRW: "KR", // South Korean Won
  SEK: "SE", // Swedish Krona
  NOK: "NO", // Norwegian Krone
  TRY: "TR", // Turkish Lira
  SGD: "SG", // Singapore Dollar
  HKD: "HK", // Hong Kong Dollar
  ARS: "AR", // Argentine Peso
  CLP: "CL", // Chilean Peso
  DKK: "DK", // Danish Krone
  EGP: "EG", // Egyptian Pound
  NZD: "NZ", // New Zealand Dollar
  THB: "TH", // Thai Baht
  MYR: "MY", // Malaysian Ringgit
  IDR: "ID", // Indonesian Rupiah
  SAR: "SA", // Saudi Riyal
  KWD: "KW", // Kuwaiti Dinar
  PKR: "PK", // Pakistani Rupee
  ILS: "IL", // Israeli New Shekel
  COP: "CO", // Colombian Peso
  VND: "VN", // Vietnamese Dong
};

const CurrencySelector = ({
  selectedCurrency,
  onCurrencyChange,
  exchangeRate,
}) => {
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
              {selectedCurrency}:{" "}
              {exchangeRate || exchangeRates[selectedCurrency]}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default CurrencySelector;
