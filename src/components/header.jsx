import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../images/logo.webp";
import RoundedImage from "../images/RoundedImage.webp";
import headOne from "../images/headOne.webp";
import headTwo from "../images/headTwo.webp";
import headThree from "../images/headThree.webp";
import Map from "../icons/map";
import Menu from "../icons/menu";
import Phone from "../icons/phone";
import Info from "../icons/info";
import Like from "../icons/like";
import HeaderHome from "../icons/headerHome";
import DowMark from "../icons/dowMark";

function Header() {
  const headTitleRef = useRef(null);
  const cityImageRef = useRef(null);

  useEffect(() => {
      
    gsap.fromTo(headTitleRef.current, { x: -1000,   delay: 0.2 },{x:0, duration: 1,});
    gsap.fromTo(cityImageRef.current, { x: 1000,  delay: 0.2 },{x:0, duration: 1,} );
  }, []);

  return (
    <div className="container flex flex-col justify-between gap-10 py-[10px] xl:flex-row">
      <div ref={headTitleRef} className="left flex flex-col justify-between  xl:w-1/2  pt-10 xl:h-[880px] sm:h-[400px]">
        <div className="flex justify-between">
          <img
            src={logo}
            alt=""
            className="logo w-[86px] xl:w-32"
            loading="lazy"
          />
          <div className="buttons flex gap-2">
            <button
              type="button"
              className="bg-[#F6F6F6] w-[34px] h-[34px] xl:w-[46px] xl:h-[46px] flex  items-center justify-center border-0 rounded-lg "
            >
              <Map />
            </button>
            <button
              type="button"
              className="bg-[#F6F6F6] w-[34px] h-[34px] xl:w-[46px] xl:h-[46px] flex  items-center justify-center border-0 rounded-lg "
            >
              <Menu />
            </button>
          </div>
        </div>
        <div className=" flex flex-col items-center pt-20">
          <p className="font-montreal font-normal text-sm xl:text-lg ">
            Building Your Dreams
          </p>
          <h1 className="font-montreal font-normal text-4xl w-80 text-center pt-2 xl:text-6xl xl:w-[581px]">
            Real Estate in Dubai: Ideal for Living and Investing
          </h1>
        </div>
        <div className="flex items-center justify-center pt-6 w-full xl:justify-between">
          <div className="flex p-1  w-48 h-12 bg-[#141414] items-center gap-[10px] rounded-[80px]">
            <button className=" flex items-center justify-center w-9 h-9 rounded-full bg-[#D5E7EE]">
              <Phone />
            </button>
            <p className="font-montreal font-normal text-white">
              Contact Us Now
            </p>
          </div>
          <div className="hidden items-center gap-4 relative xl:flex">
            <h5 className="w-[89px] font-montreal font-normal text-sm">
              Explore All Our Properties
            </h5>
            <div className=" flex">
              <button className="flex absolute right-0 top-0 items-center justify-center w-6 h-6 rounded-full bg-[#D5E7EE]">
                <Info />
              </button>
              <img
                className="w-[70px] h-[70px] rounded-full object-cover object-center"
                src={RoundedImage}
                alt="image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div ref={cityImageRef}  className="right relative pb-4 w-full h-[429px]  mt-2 xl:w-1/2 xl:h-[880px]">
        <div className="flex flex-col justify-between items-end p-[30px]  h-full absolute right-0 z-10">
          <div className="button flex justify-end gap-2 ">
            <button className="group w-[46px] h-[46px] rounded-lg border-[1px] flex justify-center items-center duration-500 hover:bg-white">
              <Like />
            </button>
            <button className="group w-[46px] h-[46px] rounded-lg border-[1px] flex justify-center items-center  duration-500 hover:bg-white">
              <HeaderHome />
            </button>
          </div>
          <div className="flex items-center justify-center w-[125px] h-[56px] bg-white rounded-[10px] gap-2">
            <p className="font-montreal font-normal text-sm w-14">
              catalog download
            </p>
            <button className="flex items-center justify-center w-7 h-8 bg-[#F6F6F6] rounded-full">
              <DowMark/>
            </button>
          </div>
        </div>
        <div className=" flex absolute bottom-[30px] left-[30px] md:top-[30px] z-10">
          <p className=" hidden w-44 font-montreal font-medium text-white text-base md:text-lg md:flex lg:flex xl:flex">
            More than 1500 real estate properties
          </p>
          <p className="hidden  w-44 font-montreal font-medium text-white text-base xl:flex md:text-lg md:w-48">
            From $145,000 with a yield of 10% per annum
          </p>
        </div>

        <Swiper
          className="flex h-[429px] xl:h-[880px] overflow-hidden "
          
            modules={[Autoplay]}
            autoplay={{
              delay:5000,
              disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img
              className="w-full h-full  rounded-[30px] object-cover object-center"
              src={headOne}
              alt="image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full  rounded-[30px] object-cover object-center"
              src={headTwo}
              alt="image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full  rounded-[30px] object-cover object-center"
              src={headThree}
              alt="image"
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Header;
