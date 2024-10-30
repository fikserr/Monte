import sales from "../images/sales.jpeg";
import roundedImage from "../images/RoundedImage.jpeg";
import investment from "../images/invesment.jpeg";
import market from "../images/market.jpeg";

function Ownership() {
  return (
    <div className="bg-[rgb(35,35,35)] py-20 relative  overflow-hidden md:h-[1814px]">
      <div className="container flex justify-center">
        <div className="top_title md:flex md:justify-between md:w-full">
          <div className="flex flex-col">
            <h1 className="font-montreal font-normal text-white text-4xl md:text-[56px] leading-[68px]">
              Tailored Solutions <br /> for Your Real Estate <br /> Needs
            </h1>
            <div className="flex items-center gap-3 pt-[30px]">
              <div className="w-3 h-3 bg-[#D5E7EE] rounded-full"></div>
              <button className="flex gap-2 items-center font-montreal font-normal text-base text-white md">
                Explore More
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8.5L16 8.5"
                    stroke="#D5E7EE"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.5 1L16 8.5L8.5 16"
                    stroke="#D5E7EE"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-col pt-[60px] md:w-1/2 gap-5 md:gap-[30px] md:pt-0">
            <div className="box w-[353px] h-[100px] bg-white rounded-[80px] p-[15px] flex justify-between items-center md:w-full md:h-[120px] md:p-[10px]">
              <img
                src={sales}
                alt="image"
                className="object-cover object-center w-[76px] h-[76px] rounded-[80px] md:w-[100px] md:h-[100px] "
              />

              <div className="text flex items-start gap-[5px]">
                <h6 className="font-montreal font-normal text-xl md:text-4xl">
                  Property Sales
                </h6>
                <p className="font-montreal font-normal text-xs md:text-sm">
                  01
                </p>
              </div>

              <button className="flex justify-center items-center w-14 h-14 hover:bg-[#D5E7EE] duration-500 rounded-full md:w-[78px] md:h-[78px]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 1V25"
                    stroke="#232323"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25 13L13 25L1 13"
                    stroke="#232323"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="box w-[353px] h-[100px] bg-white rounded-[80px] p-[15px] flex justify-between items-center md:w-full md:h-[120px] md:p-[10px]">
              <img
                src={roundedImage}
                alt="image"
                className="object-cover object-center w-[76px] h-[76px] rounded-[80px] md:w-[100px] md:h-[100px] "
              />

              <div className="text flex items-start gap-[5px]">
                <h6 className="font-montreal font-normal text-xl md:text-4xl">
                  Property Management
                </h6>
                <p className="font-montreal font-normal text-xs md:text-sm">
                  02
                </p>
              </div>

              <button className="flex justify-center items-center w-14 h-14 hover:bg-[#D5E7EE] duration-500 rounded-full md:w-[78px] md:h-[78px]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 1V25"
                    stroke="#232323"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25 13L13 25L1 13"
                    stroke="#232323"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="box w-[353px] h-[100px] bg-white rounded-[80px] p-[15px] flex justify-between items-center md:w-full md:h-[120px] md:p-[10px]">
              <img
                src={investment}
                alt="image"
                className="object-cover object-center w-[76px] h-[76px] rounded-[80px] md:w-[100px] md:h-[100px] "
              />

              <div className="text flex items-start gap-[5px]">
                <h6 className="font-montreal font-normal text-xl md:text-4xl">
                  Investment Consultation
                </h6>
                <p className="font-montreal font-normal text-xs md:text-sm">
                  03
                </p>
              </div>

              <button className="flex justify-center items-center w-14 h-14 hover:bg-[#D5E7EE] duration-500 rounded-full md:w-[78px] md:h-[78px]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 1V25"
                    stroke="#232323"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25 13L13 25L1 13"
                    stroke="#232323"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="box w-[353px] h-[100px] bg-white rounded-[80px] p-[15px] flex justify-between items-center md:w-full md:h-[120px] md:p-[10px]">
              <img
                src={market}
                alt="image"
                className="object-cover object-center w-[76px] h-[76px] rounded-[80px] md:w-[100px] md:h-[100px] "
              />

              <div className="text flex items-start gap-[5px]">
                <h6 className="font-montreal font-normal text-xl md:text-4xl">
                  Market Analysis
                </h6>
                <p className="font-montreal font-normal text-xs md:text-sm">
                  04
                </p>
              </div>

              <button className="flex justify-center items-center w-14 h-14 hover:bg-[#D5E7EE] duration-500 rounded-full md:w-[78px] md:h-[78px]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 1V25"
                    stroke="#232323"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25 13L13 25L1 13"
                    stroke="#232323"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 pt-[60px] w-[3000px] md:pt-[120px]">
        <h3 className="bg-[#393939] py-4 px-[30px] rounded-[80px] font-montreal font-normal text-[#232323] text-[56px] md:text-[82px]">
          Payment from Almaty
        </h3>
        <h3 className="bg-[#393939] py-4 px-[30px] rounded-[80px] font-montreal font-normal text-[#232323] text-[56px] md:text-[82px]">
          0% Commission
        </h3>
        <h3 className="bg-[#393939] py-4 px-[30px] rounded-[80px] font-montreal font-normal text-[#232323] text-[56px] md:text-[82px]">
        Remote Purchase
        </h3>
      </div>

      <div className="container flex justify-center">
        <div className="pt-20 flex flex-col items-center md:pt-[120px]">
          <h1 className="font-montreal font-normal text-4xl text-white text-center md:text-6xl">
            Path to Smart Ownership
          </h1>

          <div className="circles flex flex-col  py-10 -space-y-20 md:flex-row md:-space-x-20 md:-space-y-0 md:pt-20">
            <div className="h-[353px] w-[353px] rounded-full border-[1px] border-white flex justify-center items-center md:w-[413px] md:h-[413px]">
              <h6 className="font-montreal font-normal text-white text-lg text-center md:text-xl">
                10% Initial <br /> Payment
              </h6>
            </div>
            <div className="h-[353px] w-[353px] rounded-full border-[1px] border-white flex justify-center items-center md:w-[413px] md:h-[413px]">
              <h6 className="font-montreal font-normal text-white text-lg text-center md:text-xl">
              5 years installment,<br />
              0% overpayment
              </h6>
            </div>
            <div className="h-[353px] w-[353px] rounded-full border-[1px] border-white flex justify-center items-center md:w-[413px] md:h-[413px]">
              <h6 className="font-montreal font-normal text-white text-lg text-center md:text-xl">
              Rental income ~ 15%
              </h6>
            </div>  
          </div>

          <button className="w-[186px] h-10 bg-[#393939] rounded-[80px] flex gap-2 items-center p-[3px] font-montreal font-normal text-base text-white md:w-[195px] md:h-[45px] mt-10 md:mt-20 ">
            <span className="bg-white w-[34px] h-[34px] rounded-full flex justify-center items-center md:w-[37px] md:h-[37px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 13V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V13"
                  stroke="#232323"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 8L10 13L15 8"
                  stroke="#232323"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 13V1"
                  stroke="#232323"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Catalog Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ownership;
