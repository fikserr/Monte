import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import teammateOne from "../images/teammateOne.webp";
import teammateTwo from "../images/teammateTwo.webp";
import teammateThree from "../images/teammateThree.webp";
import teammateFour from "../images/teammateFour.webp";
import partnersImg from "../images/partnersImg.webp";
import Phone from "../icons/phone";
import Mark from "../icons/markQuestion";

function Building() {
  const buildingTopRef = useRef(null)
  const buildingCenterRef = useRef(null)
  const buildingBottomRef = useRef(null)
  useEffect(() => {
    gsap.fromTo(
      buildingTopRef.current,
      { x: -800 },
      {
        x: 0,
        delay: 0.2,
        scrollTrigger: {
          trigger: buildingTopRef.current,
          
        },
      }
    );
    gsap.fromTo(
       buildingBottomRef.current,
      { x: 800 },
      {
        x: 0,
        delay: 0.2,
        scrollTrigger: {
          trigger:  buildingBottomRef.current,
          
        },
      }
    );
    gsap.fromTo(
      buildingCenterRef.current,
     { x: -800 },
     {
       x: 0,
       delay: 0.4,
       scrollTrigger: {
         trigger:  buildingCenterRef.current,
         
       },
     }
   );
  }, []);

  return (
    <div className="pt-[60px] pb-20 xl:h-[900px]">
      <div className="container flex flex-col items-center">
        <div className="xl:flex xl:flex-col xl:items-start w-full  relative">
          <div ref={buildingTopRef} className="top pb-[70px]">
            <p className="font-montreal font-normal text-[#00000080] text-base w-[356px]">
              At Golden Gate Properties, we offer more than just real estate
              services; we provide an unparalleled experience tailored to meet
              your needs and exceed your expectations.
            </p>
            <div className="flex gap-[18px] pt-10 xl:pt-[50px]">
              <div className="flex -space-x-4 relative">
                <img
                  src={teammateOne}
                  alt="image"
                  className=" object-cover object-center w-[60px] h-[60px] rounded-full"
                  loading="lazy"
                />
                <img
                  src={teammateTwo}
                  alt="image"
                  className=" object-cover object-center w-[60px] h-[60px] rounded-full"
                  loading="lazy"
                />
                <img
                  src={teammateThree}
                  alt="image"
                  className=" object-cover object-center w-[60px] h-[60px] rounded-full"
                  loading="lazy"
                />
                <img
                  src={teammateFour}
                  alt="image"
                  className=" object-cover object-center w-[60px] h-[60px] rounded-full"
                  loading="lazy"
                />
              </div>
              <p className="font-montreal font-normal text-base text-[#00000080]">
                Meet Our <br />
                Professional Team
              </p>
            </div>
          </div>

          <div ref={buildingBottomRef} className="flex flex-col  xl:flex-row-reverse  w-full  xl:justify-between xl:items-end xl:absolute xl:top-0  ">
                <div className="images rounded-2xl overflow-hidden relative  xl:w-1/2">
                    <img
                        src={partnersImg}
                        alt="image"
                        className="h-[429px] object-cover object-center w-full xl:h-[820px]"
                        loading="lazy"
                    />

                    <div className="p-[15px] absolute top-0 flex flex-col justify-between items-end h-full w-full xl:p-[30px] ">
                        <div className="flex p-1  w-[171px] h-10 bg-[#D5E7EE] items-center gap-[10px] rounded-[80px] xl:w-[196px] xl:h-[45px]">
                        <button className=" flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[#FFFFFF] xl:w-[37px] xl:h-[37px]">
                            <Phone/>
                        </button>
                        <p className="font-montreal font-normal text-base text-black">
                            Contact Us Now
                        </p>
                        </div>

                        <div className="flex flex-col items-end">
                        <div className="circle flex justify-center items-center bg-[#D5E7EE] w-7 h-7 rounded-full xl:w-[45px] xl:h-[45px]">
                            <Mark/>
                        </div>
                       <div className="flex xl:justify-end 2xl:justify-between items-end xl:w-[600px]">
                        <p className="hidden font-montreal font-bold text-xl 2xl:flex text-white">Building Your Dreams</p>

                          <div className="h-[69px] w-[210px] bg-white pt-[10px] pb-[9px] px-[9px] rounded-[10px] flex justify-between gap-[11px] mt-[10px] xl:w-[304px] xl:h-[98px] xl:flex xl:justify-evenly xl:items-center">
                                <div className="relative">
                                <img
                                    src={teammateOne}
                                    alt="image"
                                    className="object-cover object-center h-[50px] w-[50px] rounded-full xl:w-[60px] xl:h-[60px]"
                                    loading="lazy"
                                />
                                <div className="absolute right-0 top-0 border-[3px] border-black w-[12px] h-[12px] rounded-full bg-white xl:w-[15px] xl:h-[15px]"></div>
                                
                                
                                </div>
                                <div className="text w-[132px] xl:w-[167px]">
                                    <p className="font-normal font-montreal text-[10px] text-[#23232380] xl:text-[12px]">Special Offer</p>
                                    <h5 className="font-montreal font-normal text-sm xl:text-xl">Get The Consultation With Our Expert</h5>
                                </div>
                            </div>
                       </div>
                        </div>
                    </div>
                    </div>

                    <div ref={buildingCenterRef} className="content flex flex-col pt-10 xl:w-[660px]">
                        <div className="flex gap-10 items-center py-[25px] border-b-[1px] border-[#23232333] xl:gap-16">
                            <p className="font-montreal font-normal text-[50px] leading-[60px] text-[#232323] xl:text-[82px] xl:w-44">100+</p>
                            <h6 className="font-montreal font-normal text-[20px] leading-6 text-[#232323] w-[185px] xl:text-2xl">Successful Transactions Monthly</h6>
                        </div>
                        <div className="flex gap-10 items-center py-[25px] border-b-[1px] border-[#23232333] xl:gap-16">
                            <p className="font-montreal font-normal text-[50px] leading-[60px] text-[#232323]  xl:text-[82px] xl:w-44">98%</p>
                            <h6 className="font-montreal font-normal text-[20px] leading-6 text-[#232323] w-[185px] xl:text-2xl">Customer Satisfaction Rate</h6>
                        </div>
                        <div className="flex gap-10 items-center py-[25px] border-b-[1px] border-[#23232333] xl:gap-16">
                            <p className="font-montreal font-normal text-[50px] leading-[60px] text-[#232323]  xl:text-[82px] xl:w-44">500</p>
                            <h6 className="font-montreal font-normal text-[20px] leading-6 text-[#232323] w-[185px] xl:text-2xl">Exquisite Properties 
                            Ready for Your Selection</h6>
                        </div>
                    </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Building;
