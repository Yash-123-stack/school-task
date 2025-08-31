"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({});

const useGsapHeight = (className) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const elems = document.querySelectorAll(className);

      if (!elems || elems.length === 0) {
        return;
      }

      elems.forEach((elem) => {
        gsap.from(elem, {
          height: 0,
          ease: "ease",
          scrollTrigger: {
            trigger: elem,
            start: "top 90%",
            end: "top 50%",
            scrub: 2,
          },
        });
      });
    });
    return () => {
      ctx.revert();
    };
  });
};

export default useGsapHeight;
