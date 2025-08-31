import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({});

const useGsapOpacityTransAppear = (className) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const elems = document.querySelectorAll(className);

      if (!elems || elems.length === 0) {
        return;
      }

      elems.forEach((elem) => {
        gsap.from(elem, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          ease: "ease",
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
};

export default useGsapOpacityTransAppear;
