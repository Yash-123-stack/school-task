import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Import your SVG buttons
import LeftArrow from '../assets/exhibition/left_exhibition.svg';
import RightArrow from '../assets/exhibition/right_exhibition.svg';
import bg_image from "../assets/exhibition/Bg-image.png";

// Import your card images
import interact from "../assets/exhibition/interact.svg";
import pedalogy from "../assets/exhibition/pedagogy.svg";
import exclusive from "../assets/exhibition/exclusive.svg";
import offering from "../assets/exhibition/offerings.svg";
import councelling from "../assets/exhibition/councelling.svg";

export default function WhatMakes() {
  const ExhibitionPrevRef = useRef(null);
  const ExhibitionNextRef = useRef(null);

  const cards = [
    { img: interact, title: "Interact Directly with School Heads", desc: "Get answers straight from the experts" },
    { img: pedalogy, title: "Compare Curriculum & Pedagogy", desc: "Understand the differences between CBSE, ICSE, IB, Cambridge, Finnish & more" },
    { img: exclusive, title: "Get Exclusive Fee Structures & Offers", desc: "Access transparent information and avail offers" },
    { img: offering, title: "Explore Schools Offerings", desc: "Preview infrastructure, co-curricular, teaching methodology and culture" },
    { img: councelling, title: "On-the-Spot Admissions & Counselling", desc: "Save time with instant applications and expert guidance" },
  ];

  return (
    <section className="relative w-full sm:h-[530px] h-[480px]">
      {/* Background image */}
      <img 
        src={bg_image} 
        alt="" 
        className="absolute top-0 left-0 w-full h-full object-cover -z-10" 
      />

      {/* Overlay content */}
      <h2 className="flex justify-center items-center text-white font-museo font-semibold blade-top-padding-sm mb-6 relative z-10 w-container text-center gsap-fade-in">
        What Makes This Exhibition a Must-Visit
      </h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}   // default for mobile
        breakpoints={{
          640: { slidesPerView: 1 }, // mobile
          768: { slidesPerView: 2 }, // tablets
          1024: { slidesPerView: 3 }, // desktops
          1280: { slidesPerView: 3.5 }, // large screens (optional)
        }}
        navigation={{
          prevEl: ExhibitionPrevRef.current,
          nextEl: ExhibitionNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = ExhibitionPrevRef.current;
          swiper.params.navigation.nextEl = ExhibitionNextRef.current;
        }}
        className="px-8 blade-top-margin-sm relative z-10"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="flex-none w-container cursor-pointer gsap-fade-in">
            <div className="flex flex-col h-[300px] bg-gradient-to-tr from-[#DDBFFF] to-[#EDDDFF] p-4 rounded-lg shadow-md sm:mx-0 mx-3">
              <img src={card.img} className="w-20 h-20 object-cover mb-4" alt="" />
              <h5 className="font-opensans font-bold bg-gradient-to-r from-[#3F186A] to-[#000E38] bg-clip-text text-transparent mb-2">
                {card.title}
              </h5>
              <h6 className="font-opensans font-normal bg-gradient-to-r from-[#3F186A] to-[#000E38] bg-clip-text text-transparent">
                {card.desc}
              </h6>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-4 mt-6 relative z-10">
        <div ref={ExhibitionPrevRef} className="cursor-pointer">
          <img src={LeftArrow} alt="Previous" className="w-10 h-10" />
        </div>
        <div ref={ExhibitionNextRef} className="cursor-pointer">
          <img src={RightArrow} alt="Next" className="w-10 h-10" />
        </div>
      </div>
    </section>
  );
}
