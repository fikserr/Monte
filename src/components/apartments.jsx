import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollingText from "../gsap/title";
import Home from "../icons/home";
import Key from "../icons/key";
import apartmentImage from "../images/apartment.webp";

function Apartments() {
  gsap.registerPlugin(ScrollTrigger);
  const apartmentBottomRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      apartmentBottomRef.current,
      { y: -800 },
      {
        y: 0,
        delay: 0.2,
        scrollTrigger: {
          trigger: apartmentBottomRef.current,
        },
      }
    );
  }, []);

  return (
    <div className="bg-[#F8F5F2] h-[852px] pt-24 pb-40 overflow-hidden">
      <div ref={apartmentBottomRef} className="container flex flex-col items-center ">
        <div className="flex items-center xl:gap-3">
          <button className="flex justify-center items-center w-9 h-9 rounded-full bg-[#232323] xl:w-11 xl:h-11">
            <Home />
          </button>
          <button className="flex justify-center items-center w-9 h-9 rounded-full bg-[#232323] xl:w-11 xl:h-11">
            <Key />
          </button>
        </div>
        <div className="relative pt-5 w-3/3 overflow-hidden">
          <img
            src={apartmentImage}
            alt="image"
            className="rounded-2xl h-[537px] w-full object-cover object-center"
            loading="lazy"
          />
          <ScrollingText />
        </div>
      </div>
    </div>
  );
}

export default Apartments;
