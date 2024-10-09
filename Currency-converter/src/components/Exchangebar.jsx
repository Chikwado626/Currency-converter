import React, { useState, useEffect } from "react";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import axios from "axios";

const Exchangebar = ({ fromCurrency, toCurrency, onSwap }) => {
  const [amount, setAmount] = useState(1); // Default amount to 1
  const [exchangeRate, setExchangeRate] = useState(1); // Default exchange rate
  const [convertedAmount, setConvertedAmount] = useState(0); // Stores the converted value

  // Fetch exchange rates whenever fromCurrency or toCurrency changes
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        );
        const rate = response.data.rates[toCurrency];
        setExchangeRate(rate);
        setConvertedAmount(amount * rate); // Calculate initial conversion
      } catch (error) {
        console.error("Error fetching exchange rates", error);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency, amount]);

  // Handle the input change for the amount
  const handleAmountChange = (event) => {
    const inputAmount = event.target.value;
    setAmount(inputAmount);
    setConvertedAmount(inputAmount * exchangeRate); // Update the converted value
  };

  return (
    <form className="flex flex-col items-center gap-4 mt-8 mx-auto w-[300px] lg:w-[800px] md:w-[600px]">
      <div className="flex flex-row items-center justify-center gap-3">
        {/* Input for the amount in the fromCurrency */}
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          className="px-4 py-2 border border-gray-400 rounded h-15 shadow-lg"
          placeholder="Enter amount"
        />

        {/* Show the selected fromCurrency */}
        <span className="font-semibold">{fromCurrency}</span>

        {/* Swap Button */}
        <button onClick={onSwap} type="button">
          <HiOutlineSwitchHorizontal className="fill-black h-8 w-8 z-50 mx-auto" />
        </button>

        {/* Show the selected toCurrency */}
        <span className="font-semibold">{toCurrency}</span>

        {/* Display the converted amount */}
        <input
          type="text"
          value={convertedAmount.toFixed(2)} // Display the converted value
          readOnly
          className="px-4 py-2 border border-gray-400 rounded h-15 shadow-lg"
        />
      </div>

      {/* Display exchange rate information */}
      <p className="text-center mt-2">
        {`1 ${fromCurrency} = ${exchangeRate.toFixed(4)} ${toCurrency}`}
      </p>
    </form>
  );
};

export default Exchangebar;
