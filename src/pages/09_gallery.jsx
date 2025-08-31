import React from "react";
import "./style.css";
import galleryFirst from "../assets/gallery/galley-1.jpg";
import gallerySecond from "../assets/gallery/gallery-2.jpg";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";

export default function Gallery() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center w-container gsap-fade-in">
        <h2 className="font-museo font-semibold bg-gradient-to-r from-[#3F186A] to-[#000E38] bg-clip-text text-transparent">
          Gallery
        </h2>

        <div className="relative w-full overflow-hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.5}  
            loop={true}         
            grabCursor={true}   
            className="blade-top-margin-sm clip-wave blade-bottom-margin-sm"
          >
            <SwiperSlide>
              <img
                src={galleryFirst}
                className="sm:h-[550px] h-[400px] object-cover w-full"
                alt="Gallery 1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={gallerySecond}
                className="sm:h-[550px] h-[400px] object-cover w-full"
                alt="Gallery 2"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
