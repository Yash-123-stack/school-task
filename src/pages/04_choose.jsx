import React, {useRef} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import preSchools from "../assets/choose_school/pre-school.jpg";
import LeftArrow from '../assets/exhibition/left_exhibition.svg';
import RightArrow from '../assets/exhibition/right_exhibition.svg';
import k from "../assets/choose_school/k-12.jpg";
import heritage from "../assets/choose_school/haritage-new.jpg";
import international from "../assets/choose_school/curriculam.jpg";

export default function ChooseSchool() {
  const ChoosePrevRef = useRef(null);
  const ChooseNextRef = useRef(null);

  const schools = [
    {
      img: preSchools,
      title: "Pre-Schools & Early Learning Centres",
      desc: "Nurturing foundational skills for toddlers and pre-primary children.",
    },
    {
      img: k,
      title: "K–12 CBSE Day Schools",
      desc: "Reputed schools offering complete schooling from Kindergarten to Grade 12.",
    },
    {
      img: heritage,
      title: "Heritage to New-Age Schools",
      desc: "Time-tested schools to innovative pedagogy, tech enabled, future-ready schools.",
    },
    {
      img: international,
      title: "International Curriculum Schools",
      desc: "Offering IB, Cambridge, Finnish and other global curricula with a global learning environment.",
    },
  ];
  return (
    <>
    <section>
      <div className="items-center w-container blade-bottom-padding-sm">
        <h2 className="font-museo font-semibold bg-gradient-to-r from-[#000E38] to-[#3F186A] bg-clip-text text-transparent flex justify-center items-center blade-top-margin-sm sm:max-w-full max-w-[70%] mx-auto gsap-fade-in">
          Choose the School That Fits You Best
        </h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: ChoosePrevRef.current,
            nextEl: ChooseNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = ChoosePrevRef.current;
            swiper.params.navigation.nextEl = ChooseNextRef.current;
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="blade-top-margin-sm"
        >
          {schools.map((school, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative rounded-lg overflow-hidden">
                <img src={school.img} className="object-cover w-full h-full gsap-fade-in" alt={school.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col px-4 bottom-2 justify-end">
                  <h6 className="font-museo font-semibold text-white">{school.title}</h6>
                  <p className="font-opensans font-normal text-white small-text">{school.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons Below */}
        <h2 className="flex justify-center gap-8 mt-6 xl:hidden font-museo font-semibold bg-gradient-to-r from-[#000E38] to-[#3F186A] bg-clip-text text-transparent">
          Please Swipe Right
          {/* <img
            ref={prevRef}
            src={LeftArrow}
            alt="Previous"
            className="w-10 h-10 cursor-pointer hover:scale-110 transition"
          />
          <img
            ref={nextRef}
            src={RightArrow}
            alt="Next"
            className="w-10 h-10 cursor-pointer hover:scale-110 transition"
          /> */}
        </h2>
      </div>
    </section>
    </>
  )
}
