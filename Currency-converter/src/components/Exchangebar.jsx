import React from "react";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

const Exchangebar = ({ fromCurrency, toCurrency, onSwap }) => {
  return (
    <form className="flex flex-row items-center justify-center gap-3 mt-8 mx-auto w-[300px] lg:w-[800px] md:w-[600px]">
      <input
        type="text"
        value={fromCurrency}
        readOnly
        className="px-4 py-2 border border-gray-400 rounded h-15 shadow-lg"
      />
      <button onClick={onSwap} type="button">
        <HiOutlineSwitchHorizontal className="fill-black h-8 w-8 z-50 mx-auto" />
      </button>
      <input
        type="text"
        value={toCurrency}
        readOnly
        className="px-4 py-2 border border-gray-400 rounded h-15 shadow-lg"
      />
    </form>
  );
};

export default Exchangebar;
