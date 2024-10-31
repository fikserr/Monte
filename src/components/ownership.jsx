import sales from "../images/sales.webp";
import roundedImage from "../images/RoundedImage.webp";
import investment from "../images/invesment.webp";
import market from "../images/market.webp";
import Next from "../icons/next";
import Download from "../icons/download";
import Liner from '../gsap/liner';
import CatalogDow from '../ui/CatalogDow';

function Ownership() {


  
  
  return (
    <div className="bg-[rgb(35,35,35)] py-20 relative  overflow-hidden xl:h-[1814px]">
      <div className="container flex justify-center">
        <div className="top_title xl:flex xl:justify-between xl:w-full lg:w-full lg:flex lg:justify-between ">
          <div className="flex flex-col lg:w-1/2">
            <h1 className="font-montreal font-normal text-white text-4xl xl:text-[56px] leading-[68px]">
              Tailored Solutions <br /> for Your Real Estate <br /> Needs
            </h1>
            <div className="flex items-center gap-3 pt-[30px]">
              <div className="w-3 h-3 bg-[#D5E7EE] rounded-full"></div>
              <button className="flex gap-2 items-center font-montreal font-normal text-base text-white xl">
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

          <div className="flex flex-col pt-[60px] xl:w-1/2 gap-5 xl:gap-[30px] lg:pt-0 xl:pt-0 ">
            <div className="box  w-[353px] h-[100px]  bg-white rounded-[80px] p-[15px] flex justify-between items-center xl:w-full xl:h-[120px] xl:p-[10px]">
              <img
                src={sales}
                alt="image"
                className="object-cover object-center w-[76px] h-[76px] rounded-[80px] xl:w-[100px] xl:h-[100px] "
                loading="lazy"
              />

              <div className="text flex items-start gap-[5px]">
                <h6 className="font-montreal font-normal text-xl xl:text-4xl">
                  Property Sales
                </h6>
                <p className="font-montreal font-normal text-xs xl:text-sm">
                  01
                </p>
              </div>

              <button className="flex justify-center items-center w-14 h-14 hover:bg-[#D5E7EE] duration-500 rounded-full xl:w-[78px] xl:h-[78px]">
                <Next />
              </button>
            </div>

            <div className="box  w-[353px] h-[100px]  bg-white rounded-[80px] p-[15px] flex justify-between items-center xl:w-full xl:h-[120px] xl:p-[10px]">
              <img
                src={roundedImage}
                alt="image"
                className="object-cover object-center w-[76px] h-[76px] rounded-[80px] xl:w-[100px] xl:h-[100px] "
                loading="lazy"
              />

              <div className="text flex items-start gap-[5px]">
                <h6 className="font-montreal font-normal text-xl md:w-[110px] xl:w-[220px] xl:text-4xl">
                  Property Management
                </h6>
                <p className="font-montreal font-normal text-xs xl:text-sm">
                  02
                </p>
              </div>

              <button className="flex justify-center items-center w-14 h-14 hover:bg-[#D5E7EE] duration-500 rounded-full xl:w-[78px] xl:h-[78px]">
                <Download />
              </button>
            </div>

            <div className="box w-[353px] h-[100px] bg-white rounded-[80px] p-[15px] flex justify-between items-center xl:w-full xl:h-[120px] xl:p-[10px]">
              <img
                src={investment}
                alt="image"
                className="object-cover object-center w-[76px] h-[76px] rounded-[80px] xl:w-[100px] xl:h-[100px] "
                loading="lazy"
              />

              <div className="text flex items-start gap-[5px]">
                <h6 className="font-montreal font-normal md:w-[110px] xl:w-[220px] text-xl xl:text-4xl">
                  Investment Consultation
                </h6>
                <p className="font-montreal font-normal text-xs xl:text-sm">
                  03
                </p>
              </div>

              <button className="flex justify-center items-center w-14 h-14 hover:bg-[#D5E7EE] duration-500 rounded-full xl:w-[78px] xl:h-[78px]">
                <Download />
              </button>
            </div>

            <div className="box w-[353px] h-[100px] bg-white rounded-[80px] p-[15px] flex justify-between items-center xl:w-full xl:h-[120px] xl:p-[10px]">
              <img
                src={market}
                alt="image"
                className="object-cover object-center w-[76px] h-[76px] rounded-[80px] xl:w-[100px] xl:h-[100px] "
              />

              <div className="text flex items-start gap-[5px]">
                <h6 className="font-montreal font-normal text-xl xl:text-4xl">
                  Market Analysis
                </h6>
                <p className="font-montreal font-normal text-xs xl:text-sm">
                  04
                </p>
              </div>

              <button className="flex justify-center items-center w-14 h-14 hover:bg-[#D5E7EE] duration-500 rounded-full xl:w-[78px] xl:h-[78px]">
                <Download />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Liner/>

      <div className="container flex justify-center">
        <div className="pt-20 flex flex-col items-center xl:pt-[120px]">
          <h1 className="font-montreal font-normal text-4xl text-white text-center xl:text-6xl">
            Path to Smart Ownership
          </h1>

          <div className="circles flex flex-col mb-10 xl:mb-20 py-10 -space-y-20 md:flex-row lg-flex-row xl:flex-row md:-space-x-20 lg:-space-x-20 xl:-space-x-20 md:-space-y-0 lg:-space-y-0 xl:-space-y-0 xl:pt-20">
            <div className="h-[353px] w-[353px] rounded-full border-[1px] border-white flex justify-center items-center xl:w-[413px] xl:h-[413px]">
              <h6 className="font-montreal font-normal text-white text-lg text-center xl:text-xl">
                10% Initial <br /> Payment
              </h6>
            </div>
            <div className="h-[353px] w-[353px] rounded-full border-[1px] border-white flex justify-center items-center xl:w-[413px] xl:h-[413px]">
              <h6 className="font-montreal font-normal text-white text-lg text-center xl:text-xl">
                5 years installment,
                <br />
                0% overpayment
              </h6>
            </div>
            <div className="h-[353px] w-[353px] rounded-full border-[1px] border-white flex justify-center items-center xl:w-[413px] xl:h-[413px]">
              <h6 className="font-montreal font-normal text-white text-lg text-center xl:text-xl">
                Rental income ~ 15%
              </h6>
            </div>
          </div>

          <CatalogDow/>
        </div>
      </div>
    </div>
  );
}

export default Ownership;
