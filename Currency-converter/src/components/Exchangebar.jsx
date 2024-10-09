import React, { useEffect, useState } from "react";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import axios from "axios";

const Exchangebar = ({ fromCurrency, toCurrency, onSwap }) => {
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
    <form className="flex flex-row items-center justify-center gap-3 mt-8 mx-auto w-[300px] lg:w-[800px] md:w-[600px]">
      <input
        type="text"
        value={`${fromCurrency} ${fromRate}`}
        readOnly
        className="px-4 py-2 border border-gray-400 rounded h-15 shadow-lg"
      />
      <button onClick={onSwap} type="button">
        <HiOutlineSwitchHorizontal className="fill-black h-8 w-8 z-50 mx-auto" />
      </button>
      <input
        type="text"
        value={`${toCurrency} ${toRate}`}
        readOnly
        className="px-4 py-2 border border-gray-400 rounded h-15 shadow-lg"
      />
    </form>
  );
};

export default Exchangebar;
