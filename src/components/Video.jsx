import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Video() {
  const videoPageRef = useRef(null);

  useGSAP(
    () => {
      const matchMedia = gsap.matchMedia();

      matchMedia.add("(min-width:640px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: videoPageRef.current,
            start: "top 100%",
            end: "bottom 100%",
            // markers: true,
            scrub: true,
          },
        });

        tl.from("iframe", {
          scale: 0,
        });
      });
    },
    {
      scope: videoPageRef.current,
    }
  );

  return (
    <div
      ref={videoPageRef}
      className="h-fit py-10 sm:py-0 sm:h-screen w-full items-center flex justify-center"
    >
      <iframe
        className="h-[90%] w-[90%]"
        src="https://www.youtube.com/embed/q8zc3kQKqWI"
        title="Ranking Raccoon - Build links with credible sites"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        // allowfullscreen
      ></iframe>
    </div>
  );
}

export default Video;
