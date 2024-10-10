import React, { useState } from "react";
import axios from "axios";

const HistoricalRate = ({ fromCurrency, toCurrency }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [historicalRate, setHistoricalRate] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchHistoricalRate = async () => {
    try {
      setLoading(true);
      // Fetch historical exchange rate based on the selected date
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/${selectedDate}/${fromCurrency}`
      );
      const rate = response.data.rates[toCurrency];
      setHistoricalRate(rate);
    } catch (error) {
      console.error("Error fetching historical rates", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSearch = () => {
    if (selectedDate) {
      fetchHistoricalRate();
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow-lg">
      <h3 className="text-xl font-semibold mb-4">
        Check Historical Exchange Rate
      </h3>
      <div className="flex flex-col gap-4">
        {/* Date input for selecting a date */}
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="px-4 py-2 border border-gray-400 rounded shadow"
        />

        {/* Button to search historical rate */}
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        >
          Search Rate
        </button>

        {/* Display historical rate */}
        {loading && <p>Loading...</p>}
        {historicalRate !== null && (
          <p className="mt-4 text-lg">
            {`On ${selectedDate}, 1 ${fromCurrency} = ${historicalRate.toFixed(
              4
            )} ${toCurrency}`}
          </p>
        )}
      </div>
    </div>
  );
};

export default HistoricalRate;
