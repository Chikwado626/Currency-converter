import "./App.css";
import { Headers } from "./components/Headers";
import Home from "./components/Home";
import Exchangebar from "./components/Exchangebar";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [fromCurrency, setFromCurrency] = useState("NGN");
  const [toCurrency, setToCurrency] = useState("USD");

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <>
      <Headers />
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
      <Footer />
    </>
  );
}

export default App;
