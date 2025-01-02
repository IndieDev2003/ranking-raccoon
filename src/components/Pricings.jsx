import React, { useRef } from "react";
import { starsHero, tick } from "../assets/svgs";
import Button from "./elements/Button";
import PricingStep from "./elements/PricingStep";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);
function Pricings() {
  const pricingRef = useRef(null);

  useGSAP(
    () => {
      const matchMedia = gsap.matchMedia();

      matchMedia.add("(min-width:640px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pricingRef.current,
            start: "top 80%",
            end: "bottom 90%",
          //  pin:pricingRef.current,
            scrub: true,
            // markers: true,
          },
        });
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: pricingRef.current,
            start: "top 80%",
            end: "bottom 100%",
            scrub: true,
            // pin:true,
            // markers: true,
          },
        });

        tl2.from(".pricing-main-h2", {
          y: 100,
          opacity: 0,
          duration: 1,
        })
          tl2.from(".pricing-box", {
            x: -100,
            opacity: 0,
          })
          tl2.from(".pricing-box .stars ,.pricing-box h4", {
            y: 10,
            opacity: 0,
            stagger: 0.5,
          })
          tl2.from(".pricing-box h5", {
            y: 10,
            opacity: 0,
          })
         tl2.from(".pricing-box li", {
            y: 10,
            opacity: 0,
            stagger: 0.5,
          })
        tl2.from(".pricing-box .btn-pricing", {
          y: 10,
          opacity: 0,
        })
          tl.from(".steps-pricing h3", {
            x: 200,
            opacity: 0,
          })
          tl.from(".pricing-item", {
            y: 40,
            opacity: 0,
            stagger: 0.5,
          })
          tl.from(".steps-pricing .pricing-contact", {
            opacity: 0,
          });
      });
      return () => matchMedia.revert();
    },
    { scope: pricingRef.current }
  );

  return (
    <section ref={pricingRef}>
      <h2 className="text-5xl my-5 sm:ml-10 pricing-main-h2">Pricing</h2>
      <div className="w-full flex flex-col sm:flex-row items-center justify-around">
        {/* Left Side */}
        <div className="pricing-box px-7 h-[98vh] w-full sm:w-[35%] py-10 gap-4 rounded-3xl border  border-b-4 border-r-4 border-black flex flex-col items-start justify-center">
          <img src={starsHero} className="h-10 stars" alt="" />
          <h4 className="text-3xl font-bold text-gray-800">
            Ranking Raccoon is{" "}
            <span className="text-fuchsia-500">free for 7 days</span> — no card
            required
          </h4>
          <h5 className="text-xl ">
            Then, it's just $25 per month. Cancel anytime.
          </h5>
          <ul className="pricing flex flex-col gap-2">
            <li className="flex items-center justify-start gap-3 text-gray-700 text-xl">
              <img src={tick} className="h-6" alt="" /> Curated website in your
              niche
            </li>
            <li className="flex items-center justify-start gap-3 text-gray-700 text-xl">
              <img src={tick} className="h-6" alt="" />
              Spam-free platform with manual moderation
            </li>
            <li className="flex items-center justify-start gap-3 text-gray-700 text-xl">
              <img src={tick} className="h-6" alt="" /> Direct messages to
              fellow link builders
            </li>
            <li className="flex items-center justify-start gap-3 text-gray-700 text-xl">
              <img src={tick} className="h-6" alt="" /> Zero paid links, link
              farms, or PBNs
            </li>
          </ul>
          <Button buttonText="Get Started for free" className="btn-pricing mt-5" />
        </div>

        {/* Right Side */}
        <div className="mt-10 sm:mt-0w-full sm:w-1/2 steps-pricing">
          <h3 className="text-2xl">What happens when you subscribe?</h3>
          <div>
            <PricingStep />
            <PricingStep />
            <PricingStep />
            <PricingStep />
            <PricingStep />
            <p className="text-gray-700 text-lg pricing-contact">
              Didn’t find the answer to your question?
              <br /> Let us know at
              <span className="font-semibold ml-1">
                fbdgagansuman@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricings;
