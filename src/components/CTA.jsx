import React, { useRef } from "react";
import Button from "./elements/Button";
import { racoon } from "../assets/svgs";
import { crown } from "../assets/images";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CTA() {

    const ctaRef = useRef(null)

    useGSAP(() => {
        const matchMedia = gsap.matchMedia();

 

        matchMedia.add("(min-width:740px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ctaRef.current,
                    // markers: true,
                    scrub: true,
                    start: 'top 70%',
                    end:'bottom 90%',
                }
            })

            tl.from('.cta-h2', {
                x: 100,
                opacity:0
            })
                .from('.cta-para', {
                    y: 100,
                    opacity:0
                })
                .from('.cta-btn', {
                    y: -40,
                    opacity:0
                })
               
        });
        return () => matchMedia.revert();
    },{scope:ctaRef.current})

  return (
    <section ref={ctaRef} className="h-screen w-full flex justify-center items-center   cta-ref">
      <div className="flex items-center">
        <div className="w-full sm:w-[65vw] h-fit flex flex-col justify-evenly items-start gap-4 sm:gap-10">
          <h2 className="cta-h2 text-2xl sm:text-4xl font-semibold relative">
            <img src={crown} className="hidden md:block absolute -top-6 -left-8 h-10" alt="" />
            71% of link requests get a reply within a week. 35% turn into
            published links.
          </h2>
          <p className="cta-para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
            repellendus.
          </p>
          <Button className="w-fit cta-btn" buttonText="Sign up for Free" />
        </div>
        <img className="hidden sm:block animate-bounce" src={racoon} alt="" />
      </div>
    </section>
  );
}

export default CTA;
