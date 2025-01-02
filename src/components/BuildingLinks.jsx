import React, { useRef } from "react";
import Button from "./elements/Button";
import { medal } from "../assets/svgs";
import AccordionItem from "./elements/AccordionItem";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function BuildingLinks() {
  const pageRef = useRef(null);

  useGSAP(
    () => {
      const matchMedia = gsap.matchMedia();

      matchMedia.add("(max-width: 639px)");

      matchMedia.add("(min-width: 640px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pageRef.current,
            start: "top 80%",
            end: "bottom 100%",

            // markers: true,
            scrub: true,
          },
        });

        tl.from(".links-h2", {
          x: -300,
          duration: 1,
        });

        tl.from(".medal", {
          y: 40,
          opacity: 0,
        }),
          tl.from(".medal-text", {
            y: 40,
            opacity: 0,
            duration: 1.2,
          });
        tl.from(".medal-button", {
          y: -10,
          opacity: 0,
        });

        tl.from(".accordion-item", {
          x: 400,
          y: 20,
          opacity: 0,
          stagger: 0.5,
        });
      });
      return () => matchMedia.revert();
    },
    { scope: pageRef.current }
  );

  return (
    <section ref={pageRef} className="my-20">
      <h2 className="links-h2 text-5xl font-semibold text-gray-900 ">
        A safe way of building links
      </h2>
      <div className="mt-20 flex flex-col sm:flex-row justify-between w-full  gap-4">
        {/* Left Side */}
        <div className="flex flex-col w-fit gap-3 items-start ">
          <img src={medal} className="h-20 medal" alt="" />
          <h3 className="text-3xl medal-text">
            We double-check every <br /> registered website
          </h3>
          <Button
            buttonText="Register for Free"
            className="w-min medal-button"
          />
        </div>
        {/* Right Side */}
        <div className="flex flex-col w-full sm:w-[60vw]">
          <AccordionItem />
          <AccordionItem />
          <AccordionItem />
          <AccordionItem />
          <AccordionItem />
          <AccordionItem />
        </div>
      </div>
    </section>
  );
}

export default BuildingLinks;
