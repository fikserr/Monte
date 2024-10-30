import { useState } from "react";
import portfolioOne from "../images/portfolioOne.webp";
import portfolioTwo from "../images/portfolioTwo.webp";
import portfolioThree from "../images/portfolioThree.webp";
import portfolioFour from "../images/portfolioFour.webp";
import map from "../images/map.webp";

function Portfolio() {
  const [isActive, setIsActive] = useState("Apartments");

  const handleClick = (el) => {
    setIsActive(el);
  };

  return (
    <div className="bg-[#232323] py-20">
      <div className="container">
        <div className=" w-full md:flex md:flex-col md:items-end">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <h1 className="font-montreal font-normal text-4xl text-white text-center md:text-[56px]">
              Explore Our Property Portfolio
            </h1>
            <div className="flex items-center justify-between bg-[#FFFFFF1A] p-1 rounded-lg mt-10 md:mt-0">
              <button
                onClick={() => handleClick("Apartments")}
                className={`font-montreal font-normal text-base px-4 py-[10px] rounded-lg ${
                  isActive === "Apartments"
                    ? "bg-white text-black"
                    : "text-white"
                }`}
              >
                Apartments
              </button>
              <button
                onClick={() => handleClick("Villas")}
                className={`font-montreal font-normal text-base px-4 py-[10px] rounded-lg ${
                  isActive === "Villas" ? "bg-white text-black" : "text-white"
                }`}
              >
                Villas
              </button>
              <button
                onClick={() => handleClick("For Rent")}
                className={`font-montreal font-normal text-base px-4 py-[10px] rounded-lg ${
                  isActive === "For Rent" ? "bg-white text-black" : "text-white"
                }`}
              >
                For Rent
              </button>
            </div>
          </div>

          <div className="images grid grid-cols-1 gap-7 pt-10 md:grid-cols-2">
            <div className="card h-[418px] w-full rounded-2xl overflow-hidden relative md:h-[714px] ">
              <img
                src={portfolioOne}
                alt="image"
                className="w-full h-full object-cover object-center"
              />
              <div className="content p-4 w-full h-full absolute top-0 flex flex-col justify-between md:p-6">
                <div className="flex justify-between top ">
                  <h5 className="font-montreal font-bold text-white text-lg w-40 md:text-2xl md:w-52">
                    Azure Heights Luxury Residences
                  </h5>
                  <button className="flex justify-center items-center bg-white w-9 h-9 rounded-full md:w-[52px] md:h-[52px]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 13L13 1"
                        stroke="#232323"
                        stroke-width="0.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1 1H13V13"
                        stroke="#232323"
                        stroke-width="0.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-4 right-6 flex flex-col items-end w-full">
                  <div className="hidden h-[73px] w-[169px] rounded-[19px] right-0 bg-[#D5E7EE] justify-center items-center md:flex">
                    <svg
                      width="20"
                      height="24"
                      viewBox="0 0 20 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <p className="font-jakarta font-medium text-base ">
                      Dubai Marina
                    </p>
                  </div>
                  <div className="info_home flex gap-1 pt-[10px] overflow-scroll md:overflow-visible md:justify-between ">
                    <div className="bg-white w-24 h-14 rounded-[10px] p-2 flex flex-col justify-between md:w-28 md:h-[82px]">
                      <p className="font-jakarta font-medium text-[#2E2F3080] text-[10px] md:text-xs">
                        Price
                      </p>
                      <h6 className="font-jakarta font-medium text-[#2E2F30] text-sm md:text-base">
                        from $290k
                      </h6>
                    </div>

                    <div className="bg-white w-24 h-14 rounded-[10px] p-2 flex flex-col justify-between md:w-28 md:h-[82px]">
                      <p className="font-jakarta font-medium text-[#2E2F3080] text-[10px] md:text-xs">
                        Installment Plan
                      </p>
                      <h6 className="font-jakarta font-medium text-[#2E2F30] text-sm md:text-base">
                        for 10 years
                      </h6>
                    </div>

                    <div className="bg-white w-24 h-14 rounded-[10px] p-2 flex flex-col justify-between md:w-28 md:h-[82px]">
                      <p className="font-jakarta font-medium text-[#2E2F3080] text-[10px] md:text-xs">
                        Initial Payment
                      </p>
                      <h6 className="font-jakarta font-medium text-[#2E2F30] text-sm md:text-base">
                        $30,000
                      </h6>
                    </div>

                    <div className="bg-white w-24 h-14 rounded-[10px] p-2 flex flex-col justify-between md:w-28 md:h-[82px]">
                      <p className="font-jakarta font-medium text-[#2E2F3080] text-[10px] md:text-xs">
                        Upgraded Features
                      </p>
                      <h6 className="flex gap-4">
                        <svg
                          width="19"
                          height="20"
                          viewBox="0 0 19 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 4H16C16.5304 4 17.0391 4.21071 17.4142 4.58579C17.7893 4.96086 18 5.46957 18 6C18 7.32608 17.4732 8.59785 16.5355 9.53553C15.5979 10.4732 14.3261 11 13 11H8V13M1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V5C15 5.53043 14.7893 6.03914 14.4142 6.41421C14.0391 6.78929 13.5304 7 13 7H3C2.46957 7 1.96086 6.78929 1.58579 6.41421C1.21071 6.03914 1 5.53043 1 5V3ZM6 14C6 13.7348 6.10536 13.4804 6.29289 13.2929C6.48043 13.1054 6.73478 13 7 13H9C9.26522 13 9.51957 13.1054 9.70711 13.2929C9.89464 13.4804 10 13.7348 10 14V18C10 18.2652 9.89464 18.5196 9.70711 18.7071C9.51957 18.8946 9.26522 19 9 19H7C6.73478 19 6.48043 18.8946 6.29289 18.7071C6.10536 18.5196 6 18.2652 6 18V14Z"
                            stroke="#232323"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="22"
                          height="20"
                          viewBox="0 0 22 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.02539 8V4C4.02539 3.20435 4.34146 2.44129 4.90407 1.87868C5.46668 1.31607 6.22974 1 7.02539 1H15.0254C15.821 1 16.5841 1.31607 17.1467 1.87868C17.7093 2.44129 18.0254 3.20435 18.0254 4V8M15.0254 13V11C15.0254 10.4067 15.2013 9.82664 15.531 9.33329C15.8606 8.83994 16.3292 8.45543 16.8773 8.22836C17.4255 8.0013 18.0287 7.94189 18.6107 8.05765C19.1926 8.1734 19.7272 8.45912 20.1467 8.87868C20.5663 9.29824 20.852 9.83279 20.9677 10.4147C21.0835 10.9967 21.0241 11.5999 20.797 12.1481C20.57 12.6962 20.1854 13.1648 19.6921 13.4944C19.1988 13.8241 18.6187 14 18.0254 14V17H4.02539V14C3.43205 14 2.85203 13.8241 2.35868 13.4944C1.86533 13.1648 1.48082 12.6962 1.25375 12.1481C1.02669 11.5999 0.96728 10.9967 1.08304 10.4147C1.19879 9.83279 1.48451 9.29824 1.90407 8.87868C2.32363 8.45912 2.85818 8.1734 3.44012 8.05765C4.02206 7.94189 4.62526 8.0013 5.17344 8.22836C5.72162 8.45543 6.19016 8.83994 6.5198 9.33329C6.84944 9.82664 7.02539 10.4067 7.02539 11V13M7.02539 10H15.0254M6.02539 17V19M16.0254 17V19"
                            stroke="#232323"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </h6>
                    </div>

                    <div className="bg-white w-24 h-14 rounded-[10px] p-2 flex flex-col justify-between md:w-28 md:h-[82px]">
                      <p className="font-jakarta font-medium text-[#2E2F3080] text-[10px] md:text-xs">
                        Completion Date
                      </p>
                      <h6 className="font-jakarta font-medium text-[#2E2F30] text-sm md:text-base">
                        09/2025
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card h-[418px] w-full rounded-2xl overflow-hidden relative md:h-[714px]">
              <img
                src={portfolioTwo}
                alt="image"
                className="w-full h-full object-cover object-center"
              />

              <button className="flex justify-center items-center bg-white w-9 h-9 rounded-full absolute top-4 right-4 md:w-[52px] md:h-[52px]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L13 1"
                    stroke="#232323"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1H13V13"
                    stroke="#232323"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <h5 className="font-montreal font-bold text-white text-lg absolute bottom-4 left-4">
                Azure Heights Luxury Residences
              </h5>
            </div>

            <div className="card h-[418px] w-full rounded-2xl overflow-hidden relative md:h-[714px]">
              <img
                src={portfolioThree}
                alt="image"
                className="w-full h-full object-cover object-center"
              />

              <button className="flex justify-center items-center bg-white w-9 h-9 rounded-full absolute top-4 right-4 md:w-[52px] md:h-[52px]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L13 1"
                    stroke="#232323"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1H13V13"
                    stroke="#232323"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <h5 className="font-montreal font-bold text-white text-lg absolute bottom-4 left-4">
                Azure Heights Luxury Residences
              </h5>
            </div>

            <div className="card h-[418px] w-full rounded-2xl overflow-hidden relative md:h-[714px]">
              <img
                src={portfolioFour}
                alt="image"
                className="w-full h-full object-cover object-center"
              />

              <button className="flex justify-center items-center bg-white w-9 h-9 rounded-full absolute top-4 right-4 md:w-[52px] md:h-[52px]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L13 1"
                    stroke="#232323"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1H13V13"
                    stroke="#232323"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <h5 className="font-montreal font-bold text-white text-lg absolute bottom-4 left-4">
                Azure Heights Luxury Residences
              </h5>
            </div>

            <div className="card h-[418px] w-full rounded-2xl overflow-hidden relative md:h-[714px]">
              <img
                src={portfolioOne}
                alt="image"
                className="w-full h-full object-cover object-center"
              />

              <button className="flex justify-center items-center bg-white w-9 h-9 rounded-full absolute top-4 right-4 md:w-[52px] md:h-[52px]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L13 1"
                    stroke="#232323"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1H13V13"
                    stroke="#232323"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <h5 className="font-montreal font-bold text-white text-lg absolute bottom-4 left-4">
                Azure Heights Luxury Residences
              </h5>
            </div>

            <div className="card h-[418px] w-full rounded-2xl overflow-hidden relative md:h-[714px]">
              <img
                src={map}
                alt="image"
                className="w-full h-full object-cover object-center"
              />
              <div className="flex w-full justify-between absolute top-0 p-4">
                <button className="font-montreal font-normal text-sm bg-white px-[15px] py-2 rounded-[80px]">
                  Find On The Map
                </button>
                <button className="flex justify-center items-center bg-white w-9 h-9 rounded-full md:w-[52px] md:h-[52px]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13L13 1"
                      stroke="#232323"
                      stroke-width="0.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1 1H13V13"
                      stroke="#232323"
                      stroke-width="0.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center flex-col pt-10 md:pt-20 md:flex-row md:items-end justify-between md:w-[55%] ">
            <button className="bg-[#D5E7EE] w-[121px] h-10 rounded-[80px] font-montreal font-medium text-base mb-20 md:mb-0">
              All Properties
            </button>
            <div className="md:flex md:gap-16 ">
              <h5 className="font-montreal font-medium text-base text-white text-center pb-6 md:pb-0">
                Don't Miss Out on Hot Deals! <br /> Follow Us on Social Media
              </h5>
              <div className="social flex gap-2 justify-center">
                <button
                  onClick={() => (window.location.href = "")}
                  className="flex items-center justify-center bg-[#FFFFFF1A] w-[38px] h-[38px] rounded"
                >
                  <svg
                    width="22"
                    height="16"
                    viewBox="0 0 22 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.6643 4.75301C20.5425 3.56259 20.2803 2.24663 19.3155 1.55506C18.5683 1.01876 17.586 0.998936 16.6691 1.00004C14.7308 1.00004 12.7913 1.00335 10.853 1.00445C8.98865 1.00665 7.12428 1.00775 5.25991 1.00995C4.4811 1.00995 3.72404 0.949382 3.0007 1.29076C2.37961 1.58369 1.8934 2.14091 1.6008 2.7609C1.19507 3.62316 1.11024 4.59995 1.06129 5.55361C0.971007 7.29024 0.980796 9.03127 1.08848 10.7668C1.16789 12.0332 1.36911 13.4329 2.3361 14.2401C3.19323 14.9548 4.40278 14.99 5.51444 14.9911C9.04302 14.9944 12.5727 14.9977 16.1024 14.9999C16.5549 15.001 17.0269 14.9922 17.4881 14.9416C18.3953 14.8424 19.26 14.5792 19.8431 13.8987C20.4315 13.2126 20.5827 12.2579 20.6719 11.3538C20.8895 9.16012 20.8873 6.94555 20.6643 4.75301ZM8.81243 11.0752V4.92481L14.0727 7.99942L8.81243 11.0752Z"
                      stroke="white"
                      stroke-width="1.3"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => (window.location.href = "")}
                  className="flex items-center justify-center bg-[#FFFFFF1A] w-[38px] h-[38px] rounded"
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5251 0H4.18069C1.87541 0 0 1.87596 0 4.18193V11.8181C0 14.124 1.87541 16 4.18069 16H12.5251C14.8304 16 16.7058 14.124 16.7058 11.8181V4.18193C16.7058 1.87596 14.8304 0 12.5251 0ZM1.47482 4.18193C1.47482 2.68966 2.68887 1.47525 4.18069 1.47525H12.5251C14.0169 1.47525 15.231 2.68966 15.231 4.18193V11.8181C15.231 13.3103 14.0169 14.5248 12.5251 14.5248H4.18069C2.68887 14.5248 1.47482 13.3103 1.47482 11.8181V4.18193Z"
                      fill="white"
                    />
                    <path
                      d="M8.3536 11.8889C10.4973 11.8889 12.2424 10.1443 12.2424 7.99903C12.2424 5.85372 10.4983 4.10913 8.3536 4.10913C6.20893 4.10913 4.46484 5.85372 4.46484 7.99903C4.46484 10.1443 6.20893 11.8889 8.3536 11.8889ZM8.3536 5.58533C9.68481 5.58533 10.7675 6.66837 10.7675 7.99997C10.7675 9.33157 9.68481 10.4146 8.3536 10.4146C7.02239 10.4146 5.93966 9.33157 5.93966 7.99997C5.93966 6.66837 7.02239 5.58533 8.3536 5.58533Z"
                      fill="white"
                    />
                    <path
                      d="M12.6005 4.73764C13.1778 4.73764 13.6483 4.26794 13.6483 3.68956C13.6483 3.11118 13.1787 2.64148 12.6005 2.64148C12.0223 2.64148 11.5527 3.11118 11.5527 3.68956C11.5527 4.26794 12.0223 4.73764 12.6005 4.73764Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => (window.location.href = "")}
                  className="flex items-center justify-center bg-[#FFFFFF1A] w-[38px] h-[38px] rounded"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8583 3.87414V6.63187C13.3765 6.5848 12.7504 6.47532 12.0578 6.22154C11.1535 5.89 10.4804 5.43668 10.0395 5.0857V10.6595L10.0283 10.6421C10.0354 10.7526 10.0395 10.8652 10.0395 10.9788C10.0395 13.7467 7.78793 16 5.01975 16C2.25158 16 0 13.7467 0 10.9788C0 8.2108 2.25158 5.95651 5.01975 5.95651C5.29084 5.95651 5.55682 5.978 5.81666 6.01995V8.73778C5.56705 8.64876 5.29903 8.60067 5.01975 8.60067C3.70932 8.60067 2.64235 9.66692 2.64235 10.9788C2.64235 12.2906 3.70932 13.3569 5.01975 13.3569C6.33019 13.3569 7.39715 12.2896 7.39715 10.9788C7.39715 10.9297 7.39613 10.8805 7.39306 10.8314V0H10.1479C10.1582 0.233308 10.1674 0.468667 10.1776 0.701974C10.196 1.16143 10.3597 1.60246 10.6451 1.96367C10.9796 2.38833 11.4737 2.88156 12.1673 3.27552C12.8169 3.64288 13.4266 3.80148 13.8583 3.87618V3.87414Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
