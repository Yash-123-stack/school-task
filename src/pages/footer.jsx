import React from 'react'
import logo from "../assets/school-logo.png";
import location from "../assets/location.svg";
import calling from "../assets/calling.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
export default function Footer() {
  return (
    <>
    <section className = "bg-gradient-to-t from-[#000E38] to-[#3F186A] sm:flex justify-center items-center blade-bottom-margin sm:h-[150px] sm:pt-0 blade-top-padding-sm sm:pb-0 blade-bottom-padding-sm">
     <div className = "sm:flex justify-between items-center w-container">
       <a href="/">
        <img src={logo} className = "w-28 h-28" alt="" />
        </a>
     <div className = "flex gap-3 sm:max-w-[28%] sm:pl-0 pl-2 sm:mt-0 mt-4">
        <img src={location} className = "w-10 h-10" alt="" />
      <div className = "flex flex-col">
        <h5 className = "font-museo font-semibold text-white">Corporate Office:</h5>
        <h6 className = "font-opensans font-normal text-white">Suite B-5, Ballygunge Park Tower, 67B Ballygunge Circular Road, Kolkata - 700019</h6>
      </div>
     </div>
    <div className = "flex gap-3 sm:max-w-[28%] sm:mt-0 mt-4 sm:pl-0 pl-2">
        <img src={location} className = "w-10 h-10" alt="" />
      <div className = "flex flex-col">
        <h5 className = "font-museo font-semibold text-white">Ahmedabad Office:</h5>
        <h6 className = "font-opensans font-normal text-white">12/AA, Swastik Chambers, Near CU Shah College, Ashram Road, Ahmedabad - 380009</h6>
      </div>
     </div>
     <div className = "flex gap-3 sm:max-w-[28%] sm:mt-0 mt-4 sm:pl-0 pl-2">
        <img src={calling} className = "w-10 h-10 wobble-hover cursor-pointer" alt="" />
      <div className = "flex flex-col">
        <h5 className = "font-museo font-semibold text-white">Call us on</h5>
        <h6 className = "font-opensans mt-1 font-normal text-white">9674805912 <br />9674585012</h6>
      </div>
     </div>
     <div className = "flex flex-col sm:pl-4 pl-2 ">
        <h5 className = "font-museo font-semibold text-white">Follow us on</h5>
        <div className = "flex gap-1 mt-2">
          <a href="https://www.instagram.com/premierschoolsexhibition/" target="_blank" rel="noopener noreferrer">
             <img src={instagram} className="w-10 h-10" alt="Instagram" />
               </a>
            <a href="https://www.facebook.com/PremierSchoolsExhibition/" target="_blank" rel="noopener noreferrer">
            <img src={facebook} className = "w-10 h-10" alt="" />
           </a>
             <a href="https://www.youtube.com/@PremierSchoolsExhibition" target="_blank" rel="noopener noreferrer">
            <img src={youtube} className = "w-10 h-10" alt="" />
            </a>
        </div>
     </div>
     </div>
    </section>
    </>
  )
}
