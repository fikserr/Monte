import teammateOne from "../images/teammateOne.webp";
import teammateTwo from "../images/teammateTwo.webp";
import teammateThree from "../images/teammateThree.webp";
import teammateFour from "../images/teammateFour.webp";
import partnersImg from "../images/partnersImg.webp";

function Building() {
  return (
    <div className="pt-[60px] pb-20 md:h-[900px]">
      <div className="container flex flex-col items-center">
        <div className="md:flex md:flex-col md:items-start w-full  relative">
          <div className="top pb-[70px]">
            <p className="font-montreal font-normal text-[#00000080] text-base w-[356px]">
              At Golden Gate Properties, we offer more than just real estate
              services; we provide an unparalleled experience tailored to meet
              your needs and exceed your expectations.
            </p>
            <div className="flex gap-[18px] pt-10 md:pt-[50px]">
              <div className="flex -space-x-4 relative">
                <img
                  src={teammateOne}
                  alt="image"
                  className=" object-cover object-center w-[60px] h-[60px] rounded-full"
                />
                <img
                  src={teammateTwo}
                  alt="image"
                  className=" object-cover object-center w-[60px] h-[60px] rounded-full"
                />
                <img
                  src={teammateThree}
                  alt="image"
                  className=" object-cover object-center w-[60px] h-[60px] rounded-full"
                />
                <img
                  src={teammateFour}
                  alt="image"
                  className=" object-cover object-center w-[60px] h-[60px] rounded-full"
                />
              </div>
              <p className="font-montreal font-normal text-base text-[#00000080]">
                Meet Our <br />
                Professional Team
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse md:flex-wrap-reverse w-full md:justify-between md:items-start md:absolute md:top-0">
                <div className="images rounded-2xl overflow-hidden relative md:w-1/2">
                    <img
                        src={partnersImg}
                        alt="image"
                        className="h-[429px] object-cover object-center w-full md:h-[820px]"
                    />

                    <div className="p-[15px] absolute top-0 flex flex-col justify-between items-end h-full w-full md:p-[30px]">
                        <div className="flex p-1  w-[171px] h-10 bg-[#D5E7EE] items-center gap-[10px] rounded-[80px] md:w-[196px] md:h-[45px]">
                        <button className=" flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[#FFFFFF] md:w-[37px] md:h-[37px]">
                            <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M12.7686 4.63148C13.6571 4.80449 14.4736 5.23817 15.1136 5.87702C15.7537 6.51586 16.1882 7.33081 16.3616 8.21756M12.7686 1C14.6145 1.20467 16.3357 2.02968 17.6498 3.33959C18.9639 4.64949 19.7926 6.36643 20 8.20848M19.0904 15.4533V18.1769C19.0914 18.4297 19.0395 18.68 18.938 18.9117C18.8366 19.1433 18.6877 19.3513 18.501 19.5222C18.3144 19.6932 18.094 19.8233 17.854 19.9043C17.614 19.9853 17.3597 20.0154 17.1074 19.9926C14.3084 19.6891 11.6198 18.7345 9.25753 17.2055C7.05976 15.8116 5.19643 13.9518 3.79988 11.7583C2.26262 9.38981 1.30596 6.69324 1.00738 3.88702C0.984652 3.63597 1.01455 3.38294 1.09516 3.14405C1.17578 2.90515 1.30534 2.68563 1.47562 2.49946C1.64589 2.31328 1.85314 2.16453 2.08417 2.06268C2.3152 1.96083 2.56494 1.90811 2.8175 1.90787H5.54633C5.98777 1.90353 6.41572 2.05956 6.75043 2.34685C7.08514 2.63415 7.30376 3.03313 7.36554 3.46941C7.48072 4.34102 7.69432 5.19683 8.00227 6.02052C8.12465 6.34547 8.15114 6.69862 8.07859 7.03813C8.00604 7.37764 7.83751 7.68928 7.59295 7.93612L6.43774 9.08912C7.73262 11.362 9.61815 13.2439 11.8954 14.5363L13.0506 13.3833C13.2979 13.1392 13.6101 12.971 13.9503 12.8986C14.2905 12.8262 14.6443 12.8527 14.9699 12.9748C15.7951 13.2822 16.6526 13.4954 17.5259 13.6103C17.9677 13.6725 18.3713 13.8947 18.6597 14.2345C18.9482 14.5743 19.1015 15.008 19.0904 15.4533Z"
                                stroke="#141414"
                                stroke-width="0.8"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            </svg>
                        </button>
                        <p className="font-montreal font-normal text-base text-black">
                            Contact Us Now
                        </p>
                        </div>

                        <div className="flex flex-col items-end">
                        <div className="circle flex justify-center items-center bg-[#D5E7EE] w-7 h-7 rounded-full md:w-[45px] md:h-[45px]">
                            <svg
                            className="text-[21px]"
                            width="25"
                            height="25"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                                stroke="#232323"
                                stroke-width="0.6"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M5.25391 5.2C5.39497 4.799 5.6734 4.46086 6.03988 4.24548C6.40636 4.0301 6.83724 3.95136 7.25621 4.02323C7.67518 4.09509 8.0552 4.31291 8.32895 4.63812C8.60271 4.96332 8.75254 5.37491 8.75191 5.8C8.75191 7 6.95191 7.6 6.95191 7.6"
                                stroke="#232323"
                                stroke-width="0.6"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M7 10H7.00571"
                                stroke="#232323"
                                stroke-width="0.6"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            </svg>
                        </div>
                       <div className="flex justify-between items-end md:w-[600px]">
                        <p className="hidden font-montreal font-bold text-lg md:flex text-white">Building Your Dreams</p>

                       <div className="h-[69px] w-[210px] bg-white pt-[10px] pb-[9px] px-[9px] rounded-[10px] flex justify-between gap-[11px] mt-[10px] md:w-[304px] md:h-[98px] md:flex md:justify-evenly md:items-center">
                            <div className="relative">
                            <img
                                src={teammateOne}
                                alt="image"
                                className="object-cover object-center h-[50px] w-[50px] rounded-full md:w-[60px] md:h-[60px]"
                            />
                            <div className="absolute right-0 top-0 border-[3px] border-black w-[12px] h-[12px] rounded-full bg-white md:w-[15px] md:h-[15px]"></div>
                            
                            
                            </div>
                            <div className="text w-[132px] md:w-[167px]">
                                <p className="font-normal font-montreal text-[10px] text-[#23232380] md:text-[12px]">Special Offer</p>
                                <h5 className="font-montreal font-normal text-sm md:text-lg">Get The Consultation With Our Expert</h5>
                            </div>
                        </div>
                       </div>
                        </div>
                    </div>
                    </div>

                    <div className="content flex flex-col pt-10 md:w-[660px]">
                        <div className="flex gap-10 items-center py-[25px] border-b-[1px] border-[#23232333] md:gap-16">
                            <p className="font-montreal font-normal text-[50px] leading-[60px] text-[#232323] md:text-[82px] md:w-44">100+</p>
                            <h6 className="font-montreal font-normal text-[20px] leading-6 text-[#232323] w-[185px] md:text-2xl">Successful Transactions Monthly</h6>
                        </div>
                        <div className="flex gap-10 items-center py-[25px] border-b-[1px] border-[#23232333] md:gap-16">
                            <p className="font-montreal font-normal text-[50px] leading-[60px] text-[#232323]  md:text-[82px] md:w-44">98%</p>
                            <h6 className="font-montreal font-normal text-[20px] leading-6 text-[#232323] w-[185px] md:text-2xl">Customer Satisfaction Rate</h6>
                        </div>
                        <div className="flex gap-10 items-center py-[25px] border-b-[1px] border-[#23232333] md:gap-16">
                            <p className="font-montreal font-normal text-[50px] leading-[60px] text-[#232323]  md:text-[82px] md:w-44">500</p>
                            <h6 className="font-montreal font-normal text-[20px] leading-6 text-[#232323] w-[185px] md:text-2xl">Exquisite Properties 
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
