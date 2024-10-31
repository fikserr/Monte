import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Logos from "../gsap/logos";


function Partners() {
 


  return (
    <div className="overflow-hidden py-20 bg-[#F8F5F2] xl:py-[100px]">
      <h3  className="font-montreal font-normal text-center text-xl xl:text-2xl">
        Our valued partners
      </h3>
      <Logos/>
      
      <div className="container pt-20">
        <div className="top xl:flex xl:justify-between items-end xl:items-start">
          <div className="title ">
            <p className="font-montreal font-normal flex gap-3 items-center text-base ">
              <span className="w-3 h-3 bg-[#141414] rounded-full"></span>Explore
              Our Advantages
            </p>
            <h1 className="font-montreal font-normal text-4xl pt-[25px] xl:text-[56px] leading-10 xl:leading-[68px]">
              Frequent Asked <br />
              Questions
            </h1>

            <p className="font-montreal font-normal text-base text-[#00000080] w-[356px] pt-[25px]">
              At Monte, we offer more than just real estate services; we provide
              an unparalleled experience tailored to meet your needs and exceed
              your expectations.
            </p>
          </div>

          <div className="card py-[30px] px-5 bg-white rounded-2xl w-full xl:w-1/2 xl:py-[50px] mt-10 xl:mt-0 xl:px-[30px]">
            <div className="flex justify-between items-center border-y-[1px] border-[#00000033] py-4 gap-11 xl:gap-[18px]">
              <h6 className="font-montreal font-normal text-base xl:text-xl">
                What types of properties do we offer in Dubai?
              </h6>
              <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-[#D5E7EE] xl:w-[52px] xl:h-[52px]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1V13"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 7H13"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex justify-between items-center border-b-[1px] border-[#00000033] py-4 gap-11 xl:gap-[18px]">
              <h6 className="font-montreal font-normal text-base xl:text-xl">
              What are the payment options available for purchasing a property?
              </h6>
              <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-[#D5E7EE] xl:w-[52px] xl:h-[52px]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1V13"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 7H13"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex justify-between items-center border-b-[1px] border-[#00000033] py-4 gap-11 xl:gap-[18px]">
              <h6 className="font-montreal font-normal text-base xl:text-xl">
              Can foreign nationals buy property in Dubai?
              </h6>
              <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-[#D5E7EE] xl:w-[52px] xl:h-[52px]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1V13"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 7H13"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>


            <div className="flex justify-between items-center border-b-[1px] border-[#00000033] py-4 gap-11 xl:gap-[18px]">
              <h6 className="font-montreal font-normal text-base  w-[85%] xl:text-xl">
              What is the process for obtaining a residency visa through property investment?
              </h6>
              <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-[#D5E7EE] xl:w-[52px] xl:h-[52px]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1V13"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 7H13"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>


            <div className="flex justify-between items-center border-b-[1px] border-[#00000033] py-4 gap-11 xl:gap-[18px]">
              <h6 className="font-montreal font-normal text-base w-[85%] xl:text-xl ">
              Are there any additional costs associated with property ownership in Dubai?
              </h6>
              <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-[#D5E7EE] xl:w-[52px] xl:h-[52px]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1V13"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 7H13"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>


            <div className="flex justify-between items-center border-b-[1px] border-[#00000033] py-4 gap-11 xl:gap-[18px]">
              <h6 className="font-montreal font-normal text-base xl:text-xl">
              Do we offer property management services for rental properties?
              </h6>
              <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-[#D5E7EE] xl:w-[52px] md:h-[52px]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1V13"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 7H13"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex justify-between items-center border-b-[1px] border-[#00000033] py-4 gap-11 md:gap-[18px]">
              <h6 className="font-montreal font-normal text-base md:text-xl">
              Can we assist with property financing for non-resident buyers?
              </h6>
              <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-[#D5E7EE] md:w-[52px] md:h-[52px]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1V13"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 7H13"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
