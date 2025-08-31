import React from 'react'
import Million from "../assets/participating/trusted.png";
import legacy from "../assets/participating/legacy.png";
import participating from "../assets/participating/participating_school.png";
import globe from "../assets/participating/Accross_globe.png";
import harrow from "../assets/participating/harrow_international.svg";
import bangkok from "../assets/participating/bangkok_school.svg";
import kings from "../assets/participating/king_college.svg";
import woodstock from "../assets/participating/woodstock_school.svg";
import agakhan from "../assets/participating/aga_khan.svg";
import TISB from "../assets/participating/TISB.svg";
export default function ParticipatingSchools() {
  return (
    <>
     <section className = "">
       <div className="grid grid-cols-2 sm:flex justify-center gap-4 items-center blade-top-margin w-container-xs gsap-fade-in">
  <div>
    <img src={Million} alt="" />
  </div>
  <div>
    <img src={legacy} alt="" />
  </div>
  <div className = "sm:mt-0 mt-2">
    <img src={participating} alt="" />
  </div>
  <div className = "sm:mt-0 mt-2">
    <img src={globe} alt="" />
  </div>
</div>

<div className="blade-top-margin">
  <h3 className="bg-gradient-to-r from-[#000E38] to-[#3F186A] bg-clip-text text-transparent font-bold flex justify-center items-center gsap-fade-in">
    Participating Schools
  </h3>

  {/* Scrolling left */}
  <div className="relative overflow-hidden mt-6 gsap-slide-in">
    <div className="flex animate-scroll-left whitespace-nowrap">
      {/* First group */}
      <div className="flex">
        {[harrow, bangkok, kings, woodstock, agakhan, TISB].map((logo, i) => (
          <div
            key={i}
            className="border border-[#E8E7E7] flex justify-center items-center w-[274px] mx-2 shrink-0"
          >
            <img src={logo} alt={`school-${i}`} className="max-h-[80px]" />
          </div>
        ))}
      </div>
      {/* Duplicate group */}
      <div className="flex">
        {[harrow, bangkok, kings, woodstock, agakhan, TISB].map((logo, i) => (
          <div
            key={`dup-left-${i}`}
            className="border border-[#E8E7E7] flex justify-center items-center w-[274px] mx-2 shrink-0"
          >
            <img src={logo} alt={`school-dup-${i}`} className="max-h-[80px]" />
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Scrolling right */}
  <div className="relative overflow-hidden blade-top-margin-sm gsap-slide-in">
    <div className="flex animate-scroll-right whitespace-nowrap">
      {/* First group */}
      <div className="flex">
        {[harrow, bangkok, kings, woodstock, agakhan, TISB].map((logo, i) => (
          <div
            key={i}
            className="border border-[#E8E7E7] flex justify-center items-center w-[274px] mx-2 shrink-0"
          >
            <img src={logo} alt={`school-${i}`} className="max-h-[80px]" />
          </div>
        ))}
      </div>
      {/* Duplicate group */}
      <div className="flex">
        {[harrow, bangkok, kings, woodstock, agakhan, TISB].map((logo, i) => (
          <div
            key={`dup-right-${i}`}
            className="border border-[#E8E7E7] flex justify-center items-center w-[274px] mx-2 shrink-0"
          >
            <img src={logo} alt={`school-dup-${i}`} className="max-h-[80px]" />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

     </section>
    </>
  )
}


