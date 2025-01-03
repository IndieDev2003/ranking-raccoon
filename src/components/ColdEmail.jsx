import React, { useRef } from "react";
import ColdEmailStep from "./elements/ColdEmailStep";
import Button from "./elements/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
function ColdEmail() {
  const pageRef = useRef(null);

  useGSAP(
    () => {
      const matchMedia = gsap.matchMedia();

      // ?Animation for desktop
      matchMedia.add("(min-width:640px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pageRef.current,
            // markers: true,
            start: "top 80%",
            end: "bottom 100%",

            scrub: 1,
          },
        });

        tl.from(".cold-email-h2", { opacity: 0, y: 100, duration: 1 })
          .from(".cold-email-step", {
            opacity: 0,
            y: 100,
            // duration: 1,
            stagger: 0.3,
          })
          .from(".cold-email .cold-btn", { y: -120 })
          .from(".img-container", {
            x: 200,
            opacity: 0,
          })
          .from(".img-container img", {
            opacity: 0,
            y: 100,
            stagger: 0.2,
          });
      });
    },
    { scope: pageRef.current }
  );

  return (
    <section ref={pageRef} className="flex flex-col w-fulll h-fit mt-14 sm:mt-28 cold-email">
      <h2 className="cold-email-h2 text-4xl sm:text-5xl font-medium">
        Get robust backlinks without a single cold email
      </h2>

      <div className="h-full w-full flex flex-col sm:flex-row items-start justify-evenly my-14">
        {/* Left Side */}
        <div className="flex flex-col gap-3 sm:gap-4  sm:px-6 w-full  sm:w-1/2">
          <ColdEmailStep />
          <ColdEmailStep />
          <ColdEmailStep />
          <Button
            className="w-fit font-semibold mt-10 cold-btn"
            buttonText="Try it Out"
          />
        </div>

        {/* Right Left */}
        <div className="img-container border-2 border-black hidden sm:block w-[35%]  h-[110vh] rounded-3xl bg-teal-200 px-2 py-2 relative">
          <img
            className="w-64"
            src="https://www.rankingraccoon.com/images/person-p-500.png"
            alt=""
          />
          <img
            className="w-64 top-[15rem] absolute right-2"
            src="https://www.rankingraccoon.com/images/me.webp"
            alt=""
          />
          <img
            className="w-64 absolute top-[25rem]"
            src="https://www.rankingraccoon.com/images/raccoon.webp"
            alt=""
          />
          <img
            className="w-[96%] absolute bottom-3 object-cover"
            src="https://www.rankingraccoon.com/images/msg-box-p-500.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default ColdEmail;
