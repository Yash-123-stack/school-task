import React from 'react'
import logo from "../assets/school-logo.png";
import arrow from "../assets/arrow.svg";
import Button from '../atoms/button';
export default function Navbar() {
  return (
   <>
   <section className="bg-white sticky top-0 z-50 px-4 sm:block hidden">
  <div className="flex justify-between relative">
    <img
      src={logo}
      alt="logo"
      className="absolute left-0 bottom-0 translate-y-1/2 cursor-pointer h-40 w-48 sm:pt-0 "
    />
    <div className="group sm:flex border-2 border-[#3F186A] w-[20%] rounded-sm blade-top-margin-sm hover:scale-105 cursor-pointer transition-all duration-500 overflow-hidden ml-auto mb-2 hidden">
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
        REGISTER NOW
      </div>
    </div>
  </div>
   </section>
   <section className="bg-white sticky top-0 z-50 px-4 sm:hidden flex">
    <div className="flex justify-between">
    <a href = "/">
    <img
      src={logo}
      alt="logo"
      className=" h-24 w-24"
    />
    </a>
    <div className="group sm:flex border-2 border-[#3F186A] w-[20%] rounded-sm blade-top-margin-sm hover:scale-105 cursor-pointer transition-all duration-500 overflow-hidden ml-auto mb-2 hidden">
      {/* Left Icon Box */}
      <div className="bg-[#000E38] flex justify-center items-center w-[30%] px-2 py-4">
        <a href="/">
        <img
          src={arrow}
          alt="arrow"
          className="transition-transform duration-500 group-hover:rotate-45"
        />
        </a>
      </div>

      {/* Text Box */}
      <div className="flex-1 flex justify-center items-center text-[#030E3B] font-bold 
                      transition-colors duration-500 group-hover:text-white group-hover:bg-[#000E38]">
        REGISTER NOW
      </div>
    </div>
  </div>
   </section>
   </>
  )
}
