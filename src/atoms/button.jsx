import React from "react";
import arrow from "../assets/arrow.svg";

export default function Button({ text }) {
  return (
    <div className="group flex border-2 border-[#3F186A] sm:w-[40%] w-[90%] rounded-sm blade-top-margin-sm hover:scale-105 cursor-pointer transition-all duration-500 overflow-hidden">
      {/* Left Icon Box */}
      <div className="bg-[#000E38] flex justify-center items-center w-[30%] px-2 py-4">
        <img
          src={arrow}
          alt="arrow"
          className="transition-transform duration-500 group-hover:rotate-45"
        />
      </div>

      {/* Text Box */}
      <div className="flex-1 flex justify-center items-center text-[#030E3B] font-bold 
                      transition-colors duration-500 group-hover:text-white group-hover:bg-[#000E38]">
        {text}
      </div>
    </div>
  );
}
