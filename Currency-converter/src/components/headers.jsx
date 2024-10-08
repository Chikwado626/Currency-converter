import React from "react";
import { FcCurrencyExchange } from "react-icons/fc";
import { MdOutlineTranslate } from "react-icons/md";

export const Headers = () => {
  return (
    <nav className="flex justify-between items-center mx-auto py-4 gap-10">
      <div className="flex justify-center align-center w-[300px] gap-2 mt-2">
        <FcCurrencyExchange className="w-10 h-10" />
        <h1 className="font-bold text-xl mr-5">MAE FX DATA SERVICES</h1>
      </div>
      <div className="flex gap-3 align-center justify-center font-bold">
        <a href="#Support" className="hover:opacity-70">
          Support
        </a>
        <a href="#Language" className="hover:opacity-70">
          Language <MdOutlineTranslate />
        </a>
      </div>
    </nav>
  );
};
