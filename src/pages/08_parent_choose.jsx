import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// Example imports (adjust paths)
import videoTitle from "../assets/parents/video-title.png";
import first from "../assets/parents/Visitor-1.mp4";
import second from "../assets/parents/Visitor-2.mp4";
import third from "../assets/parents/visitor-3.mp4";
import fourth from "../assets/parents/Visitor-4.mp4";

export default function ParentsChoose() {
  const ParentsPrevRef = useRef(null);
  const ParentsNextRef = useRef(null);

  return (
    <section>
      <div className="w-container flex flex-col justify-center items-center blade-top-margin-sm">
        <h2 className="font-museo font-semibold bg-gradient-to-r from-[#3F186A] to-[#000E38] bg-clip-text text-transparent gsap-fade-in">
          What Makes Parents Choose Us
        </h2>

        <div className="w-full blade-top-margin-sm blade-bottom-margin-sm gsap-fade-in">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            loop
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = ParentsPrevRef.current;
              swiper.params.navigation.nextEl = ParentsNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: {slidesPerView: 4 },
            }}
          >
            {[first, second, third, fourth].map((src, i) => (
              <SwiperSlide key={i}>
                <div className="relative hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden">
                  <video
                    className="rounded-lg block w-full h-full"
                    muted
                    loop
                    playsInline
                    autoPlay
                    src={src}
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-xl" />
                  <img
                    src={videoTitle}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
                    alt="Video title"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* SVG Navigation Buttons */}
          <div className="flex justify-center gap-10 mt-6 xl:hidden">
            {/* Prev Button */}
           <button
            ref={ParentsPrevRef}
            className="rounded-full bg-[#3F186A] hover:bg-white transition text-white hover:text-[#000E38] p-1"
            >
            <svg
             width="60"
             height="60"
             viewBox="0 0 60 60"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
            >
              {/* Circle border */}
             <circle cx="30" cy="30" r="28.875" stroke="currentColor" strokeWidth="2.25"  fill="none" />

              {/* Arrow path */}
              <path
              d="M16.6162 29.116L25.3662 20.366C25.602 20.1383 25.9178 20.0123 26.2455 20.0152C26.5732 20.018 26.8868 20.1495 27.1185 20.3813C27.3503 20.613 27.4817 20.9265 27.4846 21.2543C27.4874 21.582 27.3614 21.8978 27.1337 22.1335L20.5175 28.7498H42.5C42.8315 28.7498 43.1495 28.8815 43.3839 29.1159C43.6183 29.3503 43.75 29.6683 43.75 29.9998C43.75 30.3313 43.6183 30.6492 43.3839 30.8837C43.1495 31.1181 42.8315 31.2498 42.5 31.2498H20.5175L27.1337 37.866C27.2531 37.9813 27.3484 38.1193 27.4139 38.2718C27.4794 38.4243 27.5139 38.5883 27.5153 38.7543C27.5168 38.9202 27.4851 39.0848 27.4223 39.2385C27.3594 39.3921 27.2666 39.5317 27.1492 39.649C27.0319 39.7664 26.8923 39.8592 26.7387 39.9221C26.5851 39.9849 26.4205 40.0165 26.2545 40.0151C26.0885 40.0136 25.9245 39.9792 25.772 39.9137C25.6195 39.8481 25.4816 39.7529 25.3662 39.6335L16.6162 30.8835C16.3819 30.6491 16.2503 30.3312 16.2503 29.9998C16.2503 29.6683 16.3819 29.3504 16.6162 29.116Z"
              fill="currentColor"
              />
              </svg>
             </button>


            {/* Next Button */}
           <button
            ref={ParentsNextRef}
            className="rounded-full bg-[#3F186A] hover:bg-white transition text-white hover:text-[#000E38] p-1"
            >
             <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              xmlns="http://www.w3.org/2000/svg"
             >
               {/* Circle outline */}
               <circle
               cx="30"
               cy="30"
                r="28.875"
               stroke="currentColor"
               strokeWidth="2.25"
               fill="none"
              />
          <g transform="scale(-1,1) translate(-60,0)">
          <path
            d="M16.6162 29.116L25.3662 20.366C25.602 20.1383 25.9178 20.0123 26.2455 20.0152C26.5732 20.018 26.8868 20.1495 27.1185 20.3813C27.3503 20.613 27.4817 20.9265 27.4846 21.2543C27.4874 21.582 27.3614 21.8978 27.1337 22.1335L20.5175 28.7498H42.5C42.8315 28.7498 43.1495 28.8815 43.3839 29.1159C43.6183 29.3503 43.75 29.6683 43.75 29.9998C43.75 30.3313 43.6183 30.6492 43.3839 30.8837C43.1495 31.1181 42.8315 31.2498 42.5 31.2498H20.5175L27.1337 37.866C27.2531 37.9813 27.3484 38.1193 27.4139 38.2718C27.4794 38.4243 27.5139 38.5883 27.5153 38.7543C27.5168 38.9202 27.4851 39.0848 27.4223 39.2385C27.3594 39.3921 27.2666 39.5317 27.1492 39.649C27.0319 39.7664 26.8923 39.8592 26.7387 39.9221C26.5851 39.9849 26.4205 40.0165 26.2545 40.0151C26.0885 40.0136 25.9245 39.9792 25.772 39.9137C25.6195 39.8481 25.4816 39.7529 25.3662 39.6335L16.6162 30.8835C16.3819 30.6491 16.2503 30.3312 16.2503 29.9998C16.2503 29.6683 16.3819 29.3504 16.6162 29.116Z"
            fill="currentColor"
          />
          </g>
            </svg>
           </button>
          </div>
        </div>
      </div>
    </section>
  );
}
