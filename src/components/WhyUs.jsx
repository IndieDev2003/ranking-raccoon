import React, { useRef } from "react";
import WhyUsItem from "./elements/WhyUsItem";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WhyUs() {
  const whyUsRef = useRef(null);

  useGSAP(
    () => {
      const matchMedia = gsap.matchMedia();

      matchMedia.add("(min-width: 640px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: whyUsRef.current,
            start: "top 80%",
            end: "center center",
            scrub: 1,
            // markers: true,
          },
        });

        tl.from(".why-us-item", {
          duration: 1,
          y: 100,
          opacity: 0,
          stagger: 0.5,
        });
        tl.to(".why-us-center", {
          y: -35,
          duration: 1,
        });
      });

      matchMedia.add("(max-width:639px");

      return () => matchMedia.revert();
    },
    {
      scope: whyUsRef.current,
    }
  );

  return (
    <div
      ref={whyUsRef}
      className="min-h-[50vh] w-full my-3 sm:my-32 gap-4 sm:gap-0 flex flex-col sm:flex-row items-center justify-evenly why-us overflow-hidden sm:overflow-visible"
    >
      <WhyUsItem />
      <WhyUsItem className="why-us-center" />
      <WhyUsItem />
    </div>
  );
}

export default WhyUs;

//
