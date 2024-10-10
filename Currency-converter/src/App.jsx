import "./App.css";
import { Headers } from "./components/Headers";
import Home from "./components/Home";
import Exchangebar from "./components/Exchangebar";
import Footer from "./components/Footer";
import HistoricalRate from "./components/HistoricalRate";
import { useState } from "react";

function App() {
  const [fromCurrency, setFromCurrency] = useState("NGN");
  const [toCurrency, setToCurrency] = useState("USD");

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Headers />
      <main className="flex-grow">
        <Home
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          setFromCurrency={setFromCurrency}
          setToCurrency={setToCurrency}
        />
        <Exchangebar
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          onSwap={handleSwap}
        />
        {/* Adding the new HistoricalRate component */}
        <HistoricalRate fromCurrency={fromCurrency} toCurrency={toCurrency} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
