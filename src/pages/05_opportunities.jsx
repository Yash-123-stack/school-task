import React from 'react'
import opportunity from "../assets/Appointments/school_appointment.jpg";
import Button from '../atoms/button';

export default function ExcitingOpportunities() {
  return (
<section className="relative w-full">
  <div className="flex flex-col md:flex-row relative h-full md:h-[500px]">

    {/* Left Content */}
    <div className="flex flex-col justify-start sm:justify-center sm:w-[50%] bg-[#EAD7FF] sm:pb-0 blade-bottom-padding-sm">
      <h3 className="font-museo sm:w-container w-container-sm font-medium italic text-lg md:text-xl text-[#755797] sm:pt-0 blade-top-padding-sm gsap-fade-in">
        Exciting Opportunities for Parents!
      </h3>

      <h1 className="mt-3 font-opensans sm:w-container w-container-sm font-semibold text-2xl md:text-4xl leading-snug text-[#3F186A] gsap-fade-in">
        Pre-schedule Your School Appointments
      </h1>

      <h3 className="mt-3 font-museo sm:w-container w-container-sm font-medium italic text-base md:text-lg text-[#755797] gsap-fade-in">
        To Avoid Rush
      </h3>
    
       <div className = "sm:w-container w-container-sm gsap-fade-in">
           <Button text="Pre-schedule Now" />
       </div>
      
    </div>

    {/* Right Image Section with Gradient Overlay */}
    <div className="relative sm:w-[50%]">
      <img
        src={opportunity}
        alt="School appointment discussion"
        className="w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="sm:absolute w-[45%] inset-0 bg-fade-overlay"></div>
      <div className="absolute sm:hidden w-full inset-0 h-[45%] bg-fade-overlay-mobile"></div>
    </div>
  </div>
</section>



  )
}
