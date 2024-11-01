import logo from "../images/logo.webp";
import footerMap from "../images/mapFooter.webp";
import teammateOne from "../images/teammateOne.webp";

function Footer() {
  return (
    <div className="py-20 bg-[#F8F5F2] xl:h-[810px]">
      <div className="container xl:flex xl:flex-col xl:justify-between h-full">

        <div className="xl:flex xl:justify-between xl:items-start">
          <div>
            <img src={logo} alt="logo" className="w-[170px]" />
            <p className="pt-5 font-montreal font-normal text-sm">
              Building Your Dreams In Real Estate
            </p>
          </div>

          <div className="pt-[60px] w-[350px] xl:p-0 xl:w-[130px]">
            <p className="font-montreal text-base pb-[30px]">Quick Navigation</p>
            <div className="flex flex-col flex-wrap gap-x-12 gap-y-5 h-[100px] xl:h-full">
              {["Home", "Our Properties", "Our Advantages", "Our Services"].map((item) => (
                <h6 key={item} className="font-montreal font-medium text-lg">{item}</h6>
              ))}
            </div>
          </div>

          <div className="xl:p-0">
          
            <div className="hidden xl:flex items-center gap-[11px] w-[210px] xl:w-[304px] h-[98px]">
              <img
                src={teammateOne}
                alt="team member"
                className="object-cover object-center h-[50px] w-[50px] rounded-full xl:w-[60px] xl:h-[60px]"
              />
              <div className="w-[132px] xl:w-[167px]">
                <p className="text-[#23232380] text-[10px] xl:text-[12px]">Monte Founder</p>
                <h5 className="text-sm xl:text-lg">Ethan Thompson</h5>
              </div>
            </div>
            <h5 className="text-[22px] pt-[30px] hidden xl:flex">
              We are here to change <br /> your future.
            </h5>

            <div className="flex gap-5 pt-[60px] xl:pt-[30px]">
              <button className="py-2 px-[15px] bg-[#141414] rounded-[80px] text-sm text-white">
                Contact Us
              </button>
              <button>
                <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                  <path d="M3.2 0H20.8C22.01 0 23 0.99 23 2.2V15.4C23 16.61 22.01 17.6 20.8 17.6H3.2C1.99 17.6 1 16.61 1 15.4V2.2C1 0.99 1.99 0 3.2 0Z" fill="#232323" />
                  <path d="M23 2.2002L12 9.9002L1 2.2002" fill="#232323" />
                  <path d="M23 2.2002L12 9.9002L1 2.2002" stroke="#F8F5F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button>
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                  <path
                    d="M18.3844 19.7791C18.7064 20.0071 19.1214 20.0641 19.4914 19.9241C19.8614 19.7831 20.1334 19.4671 20.2154 19.0841C21.0844 15.0001 23.1924 4.66315 23.9834 0.948148C24.0434 0.668148 23.9434 0.377148 23.7234 0.190148C23.5034 0.00314829 23.1984 -0.0508518 22.9264 0.0501482C18.7334 1.60215 5.8204 6.44715 0.542398 8.40015C0.207398 8.52415 -0.0106021 8.84615 0.000397854 9.19915C0.0123979 9.55315 0.250398 9.86015 0.593398 9.96315C2.9604 10.6711 6.0674 11.6561 6.0674 11.6561C6.0674 11.6561 7.5194 16.0411 8.2764 18.2711C8.3714 18.5511 8.5904 18.7711 8.8794 18.8471C9.1674 18.9221 9.4754 18.8431 9.6904 18.6401C10.9064 17.4921 12.7864 15.7171 12.7864 15.7171C12.7864 15.7171 16.3584 18.3361 18.3844 19.7791ZM7.3744 11.1021L9.0534 16.6401L9.4264 13.1331C9.4264 13.1331 15.9134 7.28215 19.6114 3.94715C19.7194 3.84915 19.7344 3.68515 19.6444 3.57015C19.5554 3.45515 19.3914 3.42815 19.2684 3.50615C14.9824 6.24315 7.3744 11.1021 7.3744 11.1021Z"
                    fill="#232323"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>


        <div className="relative w-full xl:flex xl:flex-row-reverse xl:justify-between">
          <div className="hidden xl:flex flex-col justify-end h-full">
            <p className="font-montreal text-sm text-[#00000080]">Copyright 2023 © Golden Gate Properties</p>
            <div className="flex justify-between pt-4">
              {["Terms Of Service", "Privacy Policy"].map((text) => (
                <p key={text} className="font-montreal text-sm">{text}</p>
              ))}
            </div>
          </div>

          <div className="pt-16 xl:p-0">
            <img src={footerMap} alt="map" />
            <h6 className="font-montreal text-base pt-5">
              123 Zayed Road, <br />
              Dubai Marina, Dubai, <br />
              United Arab Emirates
            </h6>
          </div>

          <div className="pt-[60px] xl:p-0">
            <h5 className="font-montreal text-xl xl:text-[22px]">Subscribe to our news</h5>
            <p className="font-montreal text-sm text-[#00000080] xl:w-[327px] pt-5">
              Stay Informed and Never Miss a Beat: Subscribe to Our Exclusive News Updates!
            </p>
            <div className="flex items-center w-full gap-[26px] pt-[33px] xl:flex-col xl:items-start">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full max-w-[346px] font-montreal text-[#00000080] text-sm bg-transparent border-b"
              />
              <button className="bg-[#141414] rounded-[80px] py-[9px] px-4 text-white font-montreal text-sm">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
