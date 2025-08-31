import React from 'react'
import attraction from "../assets/attraction/bg-attraction.png";
import fancy from "../assets/attraction/fancy-dress.jpg";
import girlFirst from "../assets/attraction/girl-1.png";
import girlSecond from "../assets/attraction/girl-2.png";
import girlThird from "../assets/attraction/girl-3.png";
import yellow_girl from "../assets/attraction/yellow-dress.jpg";
import speaking from "../assets/attraction/speaking-girl.jpg";
import awards from "../assets/attraction/award-childrens.jpg";
import award from "../assets/attraction/awards.png";
import Button from '../atoms/button';
export default function OtherAttraction() {
  return (
    <>
   <section className="relative w-full sm:block hidden">
  
  <img src={attraction} alt="" className="w-full h-auto object-cover" />


  <div className="absolute inset-0 flex flex-row items-center justify-between w-container mx-auto px-6">
    
    {/* Left: Decorative images */}
    <div className="flex flex-col gap-2 gsap-fade-in">
      <div className="flex gap-2">
        <img src={fancy} alt="" className="w-40 h-auto rounded-lg" />
        <img src={yellow_girl} alt="" className="w-40 h-auto rounded-lg" />
      </div>
      <div className="flex gap-2">
        <img src={speaking} alt="" className="w-40 h-auto rounded-lg" />
        <img src={awards} alt="" className="w-40 h-auto rounded-lg" />
      </div>
    </div>

    <div className = "flex justify-center items-center gsap-fade-in">
      <img src={award} className = "w-64 h-64" alt="" />
    </div>

    {/* Right: Main content */}
    <div className="flex flex-col items-start max-w-lg pl-8 gsap-fade-in">
      <h2 className="font-museo font-bold bg-gradient-to-r from-[#3F186A] to-[#000E38] bg-clip-text text-transparent">
        Other Attractions for Parents & Kids
      </h2>

      <div className="flex gap-4 blade-top-margin-sm">
        <button className="text-white font-opensans font-bold bg-gradient-to-r from-[#3F186A] to-[#000E38] flex justify-center items-center rounded-md px-4 py-2 border border-[#3F186A]">
          PREMIER KIDZ AWARDS
        </button>
        <button className="flex justify-center font-opensans font-bold items-center text-[#3F186A] bg-transparent rounded-md px-4 py-2 border border-[#3F186A] hover:bg-[#000E38] transition-all duration-500 hover:text-white">
          THE PARENT EXCHANGE
        </button>
      </div>

      <h4 className="font-opensans font-bold text-black blade-top-margin-sm">
        Premier Kidz Awards
      </h4>
      <h6 className="font-opensans font-normal text-black mt-3">
        A prestigious platform celebrating young talent and building confidence by giving children the spotlight to shine.
      </h6>
        <Button text="Register Now" />
    </div>
  </div>
   </section>

   <section className = "sm:hidden ">
   <div className = "w-container blade-top-margin-sm blade-bottom-margin-sm">
    <div className = "font-opensans font-semibold text-[26px] bg-gradient-to-r from-[#000E38] to-[#3F186A] bg-clip-text text-transparent flex flex-col justify-center items-center text-center gsap-fade-in">
      Other Attractions for Parents & Kids
      <img src={award} className = "h-40 w-40 blade-top-margin-sm" alt="" />
    </div>
    <div className = "flex flex-wrap justify-center items-center gsap-fade-in">
      <img src={girlFirst} className = "h-40 w-40" alt="" />
      <img src={girlSecond} className = "h-40 w-40" alt="" />
      <img src={girlThird} className = "h-40 w-40" alt="" />
    </div>
    <div className = "flex flex-col justify-between mx-4 blade-bottom-padding-sm blade-top-margin-sm gsap-fade-in">
       <button className="text-white font-opensans font-bold bg-gradient-to-r from-[#3F186A] to-[#000E38] flex justify-center items-center rounded-md px-4 py-2 border border-[#3F186A]">
          PREMIER KIDZ AWARDS
        </button>
        <button className="flex justify-center font-opensans font-bold items-center text-[#3F186A] bg-transparent rounded-md px-4 py-2 border border-[#3F186A] hover:bg-[#000E38] transition-all duration-500 hover:text-white mt-4">
          THE PARENT EXCHANGE
        </button>
    </div>
    <div className = "text-center mx-auto gsap-fade-in">
       <h6 className = "text-[16px] font-opensans font-bold text-black">Premier Kidz Awards </h6>
       <p className = "text-[14px] font-opensans font-normal mt-2 text-black">A prestigious platform celebrating young talent and building confidence by giving children the spotlight to shine.</p>
    </div>
    <div className = "mx-2 gsap-fade-in">   
      <Button text="To know more" />
    </div>
   </div>
   </section>
    </>
  )
}
