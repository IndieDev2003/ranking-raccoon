import React, { useRef } from "react";
import Button from "./elements/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {

  const heroRef = useRef(null);

  useGSAP(() => {
    
    const tl = gsap.timeline();
    tl.from('.hero h1', { y: 100, opacity: 0, duration: 1 })
    tl.from('.hero-left .main-p', { y: -10, opacity: 0, duration: 1 })
    tl.from('.hero .review', { y: -10, opacity: 0, duration: 1 })
    tl.from('.hero button', { y: -10, opacity: 0, duration: 1 })

  },{scope:heroRef.current});

  return (
    <section ref={heroRef} className="hero h-screen w-full flex flex-col sm:flex-row items-center justify-center relative">
      {/* Left Side */}
      <div className="w-full sm:w-[70vw] h-full flex flex-col justify-center items-start gap-4 sm:gap-6 hero-left">
        <h1 className="text-4xl sm:text-7xl font-semibold">
          Link up with credible sites & ditch spam forever
        </h1>
        <p className="w-full sm:w-[50vw] font-medium text-gray-800 main-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vel
          aspernatur similique quibusdam maxime provident veniam? Ipsam nihil
          porro laboriosam.
        </p>

        {/* Review item */}
        <div className="border px-4 py-2 w-full sm:w-[500px] rounded-xl bg-blue-100 review">
          <p className="text-black font-medium">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor"
            
          </p>
          <div className="flex items-center gap-2 mt-2">
            <img
              src="https://i.pinimg.com/1200x/d4/89/43/d48943357b651feaf9133f4856ff33a0.jpg"
              className="h-10 rounded-full border-2 border-black"
              alt=""
            />
            <div className="flex flex-col">
              <h3 className="text-lg">Gagan Suman</h3>
              <p className="text-sm text-gray-700">Frontend Devloper</p>
            </div>
          </div>
              </div>
              <Button buttonText="Get Started"/>
          </div>
          {/* Right Side */}
          <div className="w-[30vw] h-full hidden sm:flex justify-center items-center relative">
              <img src="https://www.rankingraccoon.com/images/raccoon2.svg" className=" h-full absolute -bottom-24" alt="" />
          </div>
    </section>
  );
}

export default Hero;
