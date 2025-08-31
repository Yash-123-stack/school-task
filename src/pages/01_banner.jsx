import React from 'react'
import FirstChild from "../assets/first/child-1.png";
import SecondChild from "../assets/first/child-2.png";
import ThirdChild from "../assets/first/child-3.png";
import FourthChild from "../assets/first/child-4.png";
import FifthChild from "../assets/first/child-5.png";
import SixthChild from "../assets/first/child-6.png";
import SeventhChild from "../assets/first/child-7.png";
import EightChild from "../assets/first/child-8.png";
import NineChild from "../assets/first/child-9.png";
import TenthChild from "../assets/first/child-10.png";
import EleventhChild from "../assets/first/child-11.png";
import TwelthChild from "../assets/first/child-12.png";
import homeArrow from "../assets/first/front-arrow.svg";
import LeftImage from "../assets/first/left-buttton.png";
import "./style.css";
export default function SchoolBanner() {
  return (
    <>
    <section className="bg-gradient-to-r from-[#000E38] to-[#3F186A] flex items-center justify-center sm:flex hidden">
      <div className="w-container flex justify-between gap-10">
        
        {/* -------- DIV 1 (Text Content) -------- */}
        <div className="flex flex-col justify-center items-start gap-4 bg-gradient-to-r from-[#E9C79F] to-[#FFCC81] bg-clip-text text-transparent">
          <h2 className="font-museo font-semibold text-3xl">Discover Gurugram’s Top 30+ Schools</h2>
          <h4 className="font-museo font-normal text-xl">All In One Place</h4>
         <div>
          <img src={LeftImage} alt="" />
         </div>
        </div>

      {/* -------- DIV 2 (Vertical Carousel with 3 Images per Row) -------- */}
<div className="relative h-[500px] w-[600px] overflow-hidden rounded-lg">
  <div className="grid grid-cols-3 gap-2 animate-scroll">
    {/* First batch of images */}
    <img src={FirstChild} className="h-72" alt="" />
    <img src={SecondChild} className="h-72" alt="" />
    <img src={ThirdChild} className="h-72" alt="" />
    <img src={FourthChild} className="h-72" alt="" />
    <img src={FifthChild} className="h-72" alt="" />
    <img src={SixthChild} className="h-72" alt="" />
    <img src={SeventhChild} className="h-72" alt="" />
    <img src={EightChild} className="h-72" alt="" />
    <img src={NineChild} className="h-72" alt="" />
    <img src={TenthChild} className="h-72" alt="" />
    <img src={EleventhChild} className="h-72" alt="" />
    <img src={TwelthChild} className="h-72" alt="" />

    {/* Duplicate for seamless loop */}
    <img src={FirstChild} className="h-72" alt="" />
    <img src={SecondChild} className="h-72" alt="" />
    <img src={ThirdChild} className="h-72" alt="" />
    <img src={FourthChild} className="h-72" alt="" />
    <img src={FifthChild} className="h-72" alt="" />
    <img src={SixthChild} className="h-72" alt="" />
    <img src={SeventhChild} className="h-72" alt="" />
    <img src={EightChild} className="h-72" alt="" />
    <img src={NineChild} className="h-72" alt="" />
    <img src={TenthChild} className="h-72" alt="" />
    <img src={EleventhChild} className="h-72" alt="" />
    <img src={TwelthChild} className="h-72" alt="" />
  </div>
</div>


        {/* -------- DIV 3 (Enquiry Form) -------- */}
        <div className="w-[42%] flex justify-center blade-bottom-margin blade-top-margin bg-[#061532] backdrop-blur-md rounded-lg">
          <div className="w-full max-w-xl bg-transparent shadow-lg rounded-2xl p-4">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-start mb-6 text-white">
              Enquire Now
            </h2>

            {/* Form */}
            <form className="space-y-4 ">
              <input
                type="text"
                placeholder="Parent’s Name"
                className="w-full border border-gray-300 text-white font-opensans rounded-lg px-4 py-2 
                           focus:outline-none focus:ring-2 focus:ring-[#E9C79F] 
                           bg-gradient-to-r from-[#000E38] to-[#3F186A]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 text-white font-opensans rounded-lg px-4 py-2 
                           focus:outline-none focus:ring-2 focus:ring-[#E9C79F] 
                           bg-gradient-to-r from-[#000E38] to-[#3F186A]"
              />
              <textarea
                placeholder="Which grade are you looking for?"
                rows="4"
                className="w-full border border-gray-300 text-white font-opensans rounded-lg px-4 py-2 
                           focus:outline-none focus:ring-2 focus:ring-[#E9C79F] 
                           bg-gradient-to-r from-[#000E38] to-[#3F186A]"
              ></textarea>

              {/* Submit Button */}
              <div className="group flex border-2 border-[#3F186A] rounded-sm 
                              blade-top-margin-sm hover:scale-105 cursor-pointer transition-all duration-500 overflow-hidden">
                <div className="bg-white flex justify-center items-center w-[30%] px-2 py-4">
                  <img
                    src={homeArrow}
                    alt="arrow"
                    className="transition-transform duration-500 group-hover:rotate-45"
                  />
                </div>
                <div className="flex-1 flex justify-center items-center text-white font-bold 
                                transition-colors duration-500 group-hover:text-[#000E38] group-hover:bg-white">
                  SUBMIT
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
   <section className="relative bg-gradient-to-r from-[#000E38] to-[#3F186A] sm:hidden">
  <div className="overflow-hidden w-full">
    <div className="flex animate-carousel blade-top-padding-sm blade-bottom-padding-sm">
      <img src={FirstChild} className="w-32 mx-4 pb-1" alt="" />
      <img src={SecondChild} className="w-32 mx-4 pt-4" alt="" />
      <img src={ThirdChild} className="w-32 mx-4 pb-1" alt="" />
      <img src={FourthChild} className="w-32 mx-4 pt-4" alt="" />
      <img src={FifthChild} className="w-32 mx-4 pb-1" alt="" />
      <img src={SixthChild} className="w-32 mx-4 pt-4" alt="" />
      <img src={SeventhChild} className="w-32 mx-4 pb-1" alt="" />
      <img src={EightChild} className="w-32 mx-4" alt="" />

      {/* Duplicate set for seamless looping */}
      <img src={FirstChild} className="w-32 mx-4 pb-1" alt="" />
      <img src={SecondChild} className="w-32 mx-4 pt-4" alt="" />
      <img src={ThirdChild} className="w-32 mx-4 pb-1" alt="" />
      <img src={FourthChild} className="w-32 mx-4 pt-4" alt="" />
      <img src={FifthChild} className="w-32 mx-4 pb-1" alt="" />
      <img src={SixthChild} className="w-32 mx-4 pt-4" alt="" />
      <img src={SeventhChild} className="w-32 mx-4 pb-1" alt="" />
      <img src={EightChild} className="w-32 mx-4 pt-4" alt="" />
    </div>
  </div>
  <div className = "flex flex-col justify-center items-center mx-auto w-container bg-gradient-to-r from-[#E9C79F] to-[#FFCC81] bg-clip-text text-transparent pb-4">
  <h5 className = "font-museo font-semibold text-[24px]">Discover Gurugram’s</h5>
  <h5 className = "font-museo font-semibold text-[24px]">Top 30+ Schools</h5>
  <p className = "text-[14px] font-normal font-museo">All In One Place</p>
  </div>
</section>
   <div className="rounded-full bg-gradient-to-r from-[rgb(233,199,159)] to-[#FFCC81] w-container-sm p-3 blade-top-margin-sm sm:hidden">
  <div className="flex justify-between w-container divide-x divide-black/30">
    {/* div 1 */}
    <div className="flex flex-col pr-4">
      <h6 className="font-opensans font-bold">Apparel House,</h6>
      <p className="font-opensans font-medium small-text">Sec 44, Gurugram</p>
    </div>

    {/* div 2 */}
    <div className="flex flex-col pl-4">
      <h6 className="font-opensans font-bold">2-3 August 2025</h6>
      <p className="font-opensans font-medium small-text">Sat-Sun | 10AM - 6PM</p>
    </div>
  </div>
</div>

    </>
  )
}
