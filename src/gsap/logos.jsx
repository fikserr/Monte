import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import deyaar from "../images/deyaar.webp";
import danube from "../images/danube.webp";
import meydan from "../images/meydan.webp";
import meras from "../images/meraas.webp";
import damac from "../images/damac.webp";
import emaar from "../images/Emaar.webp";
import nakheel from "../images/nakheel.webp";
import sobha from "../images/sobha.webp";

const Logos = () => {
  const logoRef = useRef(null);

  useEffect(() => {

    gsap.fromTo(
      logoRef.current, 
      { x: "50%" }, 
      {
        x: "-100%", 
        duration: 20,
        repeat: -1,
        ease: "linear",
      }
    );
  }, []);


  return <div ref={logoRef} className="logos flex items-end w-[2000px] gap-[90px] pt-10 md:pt-24 md:gap-36 xl:gap-[250px]">
  <img src={deyaar} alt="image" className="object-center object-contain " loading="lazy" />
  <img src={danube} alt="image" className="object-center object-contain" loading="lazy" />
  <img src={meydan} alt="image" className="object-center object-contain" loading="lazy" />
  <img src={meras} alt="image" className="object-center object-contain" loading="lazy" />
  <img src={damac} alt="image" className="object-center object-contain" loading="lazy" />
  <img src={emaar} alt="image" className="object-center object-contain" loading="lazy" />
  <img src={nakheel} alt="image" className="object-center object-contain" loading="lazy" />
  <img src={sobha} alt="image" className="object-center object-contain" loading="lazy" />
</div>
};

export default Logos;
