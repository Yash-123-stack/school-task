import useGsapOpacity from "./useGsapOpacity";
import useGsapOpacityTransAppear from "./useGsapOpacityTransAppear";
import useGsapStagger from "./useGsapStagger";
import useGsapScale from "./useGsapScale";
import useGsapHeight from "./useGsapHeight";
import useGsapSliding from "./useGsapSliding";

const useGSAP = (pageClassName) => {
  useGsapOpacity(pageClassName + " .gsap-opacity");
  useGsapOpacityTransAppear(pageClassName + " .gsap-fade-in");
  useGsapSliding(pageClassName + " .gsap-slide-in");
  useGsapStagger(
    pageClassName + " .gsap-stagger",
    pageClassName + " .gsap-stagger-parent"
  );
  useGsapScale(pageClassName + " .gsap-scale");
  useGsapHeight(pageClassName + " .gsap-height");
};

export default useGSAP;
