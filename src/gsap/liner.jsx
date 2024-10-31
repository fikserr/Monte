import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Liner = () => {
  const textRef = useRef(null);

  useEffect(() => {

    gsap.fromTo(
      textRef.current, 
      { x: "50%" },
      {
        x: "-100%",
        duration: 20,
        repeat: -1,
        ease: "linear",
      }
    );
  }, []);


  return <div ref={textRef} style={{ whiteSpace: 'nowrap' }} className="flex  gap-5 pt-[60px] w-[3000px] xl:pt-[120px]">
  <h3 className="bg-[#393939] py-4 px-[30px] rounded-[80px] font-montreal font-normal text-[#232323] text-[56px] xl:text-[82px]">
    Payment from Almaty
  </h3>
  <h3 className="bg-[#393939] py-4 px-[30px] rounded-[80px] font-montreal font-normal text-[#232323] text-[56px] xl:text-[82px]">
    0% Commission
  </h3>
  <h3 className="bg-[#393939] py-4 px-[30px] rounded-[80px] font-montreal font-normal text-[#232323] text-[56px] xl:text-[82px]">
    Remote Purchase
  </h3>
  
</div>;
};

export default Liner;
