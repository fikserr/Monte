import logo from "../images/logo.png";
import RoundedImage from "../images/RoundedImage.jpeg";
import headOne from "../images/headOne.jpeg";

function Header() {
  return (
    <div className="container flex flex-col justify-between gap-10 md:flex-row">
      <div className="left flex flex-col justify-between  md:w-1/2  pt-10 xl:h-[880px] sm:h-[400px]">
        <div className="flex justify-between">
          <img src={logo} alt="" className="logo w-[86px] md:w-32" />
          <div className="buttons flex gap-2">
            <button
              type="button"
              className="bg-[#F6F6F6] w-[34px] h-[34px] md:w-[46px] md:h-[46px] flex  items-center justify-center border-0 rounded-lg "
            >
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 4.6V19L7.3 15.4L14.5 19L20.8 15.4V1L14.5 4.6L7.3 1L1 4.6Z"
                  stroke="#232323"
                  stroke-width="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.30078 1V15.4"
                  stroke="#232323"
                  stroke-width="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.5002 4.6001V19.0001"
                  stroke="#232323"
                  stroke-width="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="bg-[#F6F6F6] w-[34px] h-[34px] md:w-[46px] md:h-[46px] flex  items-center justify-center border-0 rounded-lg "
            >
              <svg
                width="23"
                height="16"
                viewBox="0 0 23 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0013 5.66699H5.66797"
                  stroke="#232323"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 1H1"
                  stroke="#232323"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 10.3335H1"
                  stroke="#232323"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.0013 15H5.66797"
                  stroke="#232323"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className=" flex flex-col items-center pt-20">
          <p className="font-montreal font-normal text-sm md:text-lg ">
            Building Your Dreams
          </p>
          <h1 className="font-montreal font-normal text-4xl w-80 text-center pt-2 md:text-6xl md:w-[581px]">
            Real Estate in Dubai: Ideal for Living and Investing
          </h1>
        </div>
        <div className="flex items-center justify-center pt-6 w-full md:justify-between">
          <div className="flex p-1  w-48 h-12 bg-[#141414] items-center gap-[10px] rounded-[80px]">
            <button className=" flex items-center justify-center w-9 h-9 rounded-full bg-[#D5E7EE]">
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
            <p className="font-montreal font-normal text-white">
              Contact Us Now
            </p>
          </div>
          <div className="hidden items-center gap-4 relative md:flex">
            <h5 className="w-[89px] font-montreal font-normal text-sm">
              Explore All Our Properties
            </h5>
            <div className=" flex">
              <button className="flex absolute right-0 top-0 items-center justify-center w-6 h-6 rounded-full bg-[#D5E7EE]">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 10L10 1"
                    stroke="black"
                    stroke-width="0.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1H10V10"
                    stroke="black"
                    stroke-width="0.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <img
                className="w-[70px] h-[70px] rounded-full object-cover object-center"
                src={RoundedImage}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="right relative pb-4 w-full h-[429px]  mt-2 md:w-1/2 md:h-[880px]">
        <div className="flex flex-col justify-between items-end p-[30px]  h-full absolute right-0">
          <div className="button flex justify-end gap-2 ">
            <button className="group w-[46px] h-[46px] rounded-lg border-[1px] flex justify-center items-center duration-500 hover:bg-white">
              <svg
                className="stroke-white  duration-500 group-hover:stroke-black"
                width="24"
                height="21"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.3036 2.69641C20.766 2.1586 20.1278 1.73197 19.4253 1.44089C18.7228 1.14982 17.9699 1 17.2095 1C16.4491 1 15.6961 1.14982 14.9936 1.44089C14.2912 1.73197 13.6529 2.1586 13.1153 2.69641L11.9997 3.81203L10.8841 2.69641C9.79827 1.61058 8.32556 1.00056 6.78997 1.00056C5.25437 1.00056 3.78167 1.61058 2.69584 2.69641C1.61001 3.78224 1 5.25494 1 6.79053C1 8.32613 1.61001 9.79883 2.69584 10.8847L3.81147 12.0003L11.9997 20.1885L20.188 12.0003L21.3036 10.8847C21.8414 10.3471 22.268 9.70885 22.5591 9.00636C22.8502 8.30388 23 7.55093 23 6.79053C23 6.03013 22.8502 5.27718 22.5591 4.5747C22.268 3.87222 21.8414 3.23396 21.3036 2.69641Z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className="group w-[46px] h-[46px] rounded-lg border-[1px] flex justify-center items-center  duration-500 hover:bg-white">
              <svg
                className="stroke-white  duration-500 group-hover:stroke-black"
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 20.4697H21"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.94922 20.47L1.99922 8.44C1.99922 7.83 2.28922 7.25 2.76922 6.87L9.76922 1.42C10.4892 0.86 11.4992 0.86 12.2292 1.42L19.2292 6.86C19.7192 7.24 19.9992 7.82 19.9992 8.44V20.47"
                  stroke-miterlimit="10"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 14.7197V16.2197M9.5 5.96973H12.5M14.5 9.46973H7.5C6.67 9.46973 6 10.1397 6 10.9697V20.4697H16V10.9697C16 10.1397 15.33 9.46973 14.5 9.46973Z"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center w-[125px] h-[56px] bg-white rounded-[10px] gap-2">
            <p className="font-montreal font-normal text-sm w-14">catalog download</p>
            <button className="flex items-center justify-center w-7 h-8 bg-[#F6F6F6] rounded-full">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 7.6665V9.88873C11 10.1834 10.8829 10.466 10.6746 10.6744C10.4662 10.8828 10.1836 10.9998 9.88889 10.9998H2.11111C1.81643 10.9998 1.53381 10.8828 1.32544 10.6744C1.11706 10.466 1 10.1834 1 9.88873V7.6665"
                  stroke="#232323"
                  stroke-width="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.22284 4.88867L6.00062 7.66645L8.7784 4.88867"
                  stroke="#232323"
                  stroke-width="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 7.66667V1"
                  stroke="#232323"
                  stroke-width="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className=" flex absolute bottom-[30px] left-[30px] md:top-[30px]">
            <p className="w-44 font-montreal font-medium text-white text-base md:text-lg ">
                More than 1500 real estate properties
            </p>
            <p className="hidden  w-44 font-montreal font-medium text-white text-base xl:flex md:text-lg md:w-48">
                From $145,000 with a yield of 10% per annum
            </p>
        </div>
        <img
          className="w-full h-full  rounded-[30px] object-cover object-center"
          src={headOne}
          alt="image"
        />
      </div>
    </div>
  );
}

export default Header;
