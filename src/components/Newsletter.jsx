import React, { useRef } from "react";
import { starsHero } from "../assets/svgs";
import Button from "./elements/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Newsletter() {

    const newsletterRef = useRef(null);

    useGSAP(() => {
        const matchMedia = gsap.matchMedia();

        matchMedia.add("(min-width:640px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: newsletterRef.current,
                    // markers: true,
                    start: "top 70%",
                    end: "bottom 50%",
                    scrub: true,
                }
            })
            
            tl.from('.newsletter h4', {y: 100, opacity: 0, duration: 1})
            tl.from('.newsletter p', {y: 100, opacity: 0, duration: 1})
            tl.from('.newsletter button', {y: 100, opacity: 0, duration: 1})
        })

    },{scope: newsletterRef.current})

  return (
    <section ref={newsletterRef} className="sm:h-[40vh] w-full my-10 sm:mt-20 flex flex-col sm:flex-row items-center justify-between gap-20 sm:px-10 newsletter">
      <div>
              <h4 className="sm:flex items-center text-3xl sm:text-5xl justify-center">No cold shoulder. No cold emails. <img src={starsHero} className="h-12 hidden sm:block" alt="" /></h4>
              <p className="mt-4 text-gray-700 text-xl">Save weeks on building credible links. Join Ranking Raccoon today.</p>
          </div>
        <Button buttonText="Subscibe now for free"/>
    </section>
  );
}

export default Newsletter;
