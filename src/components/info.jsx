import Diversty from "../icons/diversty";
import InfoHome from "../icons/infoHome";
import Low from "../icons/low";
import Phone from "../icons/phone";
import Profit from "../icons/profit";
import Resident from "../icons/resident";
import Safety from "../icons/safety";
import Stable from "../icons/stable";

function Info() {
  return (
    <div className="py-20">
      <div className="container">
        <div className="top md:flex md:justify-between items-end">
          <div className="title ">
            <p className="font-montreal font-normal flex gap-3 items-center text-base ">
              <span className="w-3 h-3 bg-[#141414] rounded-full"></span>Explore
              Our Advantages
            </p>
            <h1 className="font-montreal font-normal text-4xl pt-[25px] md:text-[56px] leading-[68px]">
              Why Dubai Stands <br /> Unrivalled?
            </h1>
          </div>

          <div className="hidden  p-1  w-48 h-12 bg-[#141414] items-center gap-[10px] rounded-[80px] md:flex">
            <button className=" flex items-center justify-center w-9 h-9 rounded-full bg-[#FFFFFF]">
             <Phone/>
            </button>
            <p className="font-montreal font-normal text-white">
              Contact Us Now
            </p>
          </div>
        </div>

        <div className="text__content pt-[65px] flex flex-col gap-y-5 md:flex-row md:justify-start md:gap-[43px] md:flex-wrap md:pt-[120px] md:gap-y-16">
          <div className="text flex flex-col md:w-[291px] ">
            <Diversty/>

            <h5 className="font-montreal font-medium text-xl mt-[20px] md:text-2xl md:h-[58px]">
              Diversity
            </h5>
            <p className="font-montreal font-normal text-[#14141480] text-base pt-[14px] max-w-80">
              Approximately 90% of Dubai's population consists of foreigners,
              reflecting its rich multicultural environment and tolerant
              attitude towards all.
            </p>
          </div>

          <div className="text flex flex-col md:w-[291px] ">
            <Safety/>

            <h5 className="font-montreal font-medium text-xl mt-[20px] md:text-2xl md:h-[58px]">
              Safety
            </h5>
            <p className="font-montreal font-normal text-[#14141480] text-base pt-[14px] max-w-80">
              Dubai consistently leads global rankings as one of the safest
              cities worldwide. The Emirates also secured the second position
              among the safest countries on the planet, according to Global
              Finance.
            </p>
          </div>

          <div className="text flex flex-col md:w-[291px] ">
             <Stable/>

            <h5 className="font-montreal font-medium text-xl mt-[20px] md:text-2xl md:h-[58px]">
              Stable Currency
            </h5>
            <p className="font-montreal font-normal text-[#14141480] text-base pt-[14px] max-w-80">
              The dirham's exchange rate has been firmly pegged to the dollar
              for over 20 years, ensuring stability and confidence in financial
              transactions.
            </p>
          </div>

          <div className="text flex flex-col md:w-[291px] ">
            <Resident/>
            <h5 className="font-montreal font-medium text-xl mt-[20px] md:text-2xl md:h-[58px]">
              Resident Visa Opportunities
            </h5>
            <p className="font-montreal font-normal text-[#14141480] text-base pt-[14px] max-w-80">
              Investing in real estate (starting from AED 750,000 or USD
              204,000) offers the possibility of obtaining a resident visa.
            </p>
          </div>

          <div className="text flex flex-col md:w-[291px] ">
            <Profit/>

            <h5 className="font-montreal font-medium text-xl mt-[20px] md:text-2xl md:h-[58px]" >
              Profit Tax Exemption for Residents
            </h5>
            <p className="font-montreal font-normal text-[#14141480] text-base pt-[14px] max-w-80">
              This includes income from rental properties, offering attractive
              incentives for property owners and investors.
            </p>
          </div>

          <div className="text flex flex-col md:w-[291px] ">
            <Low/>

            <h5 className="font-montreal font-medium text-xl mt-[20px] md:text-2xl md:h-[58px]">
              Low Mortgage Rates
            </h5>
            <p className="font-montreal font-normal text-[#14141480] text-base pt-[14px] max-w-80">
              For non-residents, mortgage rates stand at an appealing 5–7%,
              providing accessible financing options for property purchases.
            </p>
          </div>

          <div className="text flex flex-col md:w-[291px] ">
            <InfoHome/>

            <h5 className="font-montreal font-medium text-xl mt-[20px] md:text-2xl md:h-[58px]">
              Remote Property Acquisition
            </h5>
            <p className="font-montreal font-normal text-[#14141480] text-base pt-[14px] max-w-80">
              Reach out to us, and we'll assist you in selecting a worthy
              property while handling all transaction formalities. Moreover,
              with 0% commission, our services are compensated directly by
              developers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
