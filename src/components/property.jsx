import one from "../images/one.webp";
import two from "../images/two.webp";
import three from "../images/three.webp";
import four from "../images/four.webp";
import five from "../images/five.webp";
import six from "../images/six.webp";
import seven from "../images/seven.webp";
import eight from "../images/eight.webp";
import nine from "../images/nine.webp";
import ten from "../images/ten.webp";
import eleven from "../images/eleven.webp";
import twelve from "../images/twelve.webp";
import monteLogo from "../images/monteLogo.png";
import PropetyIcon from "../icons/propetyIcon";
import CatalogDow from "../ui/CatalogDow";

function Property() {
  return (
    <div className="container flex flex-col justify-center xl:items-end py-20 ">
      <div className=" w-full flex flex-col items-center xl:flex-row-reverse xl:justify-between xl:w-2/3">
        <div className="flex gap-2 pb-[25px]">
          <button className="flex justify-center items-center w-[34px] h-[34px] bg-[#F6F6F6] rounded-full">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13.1689H13.5"
                stroke="#232323"
                stroke-width="0.8"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.59375 13.1687L1.625 5.65C1.625 5.26875 1.80625 4.90625 2.10625 4.66875L6.48125 1.2625C6.93125 0.9125 7.5625 0.9125 8.01875 1.2625L12.3937 4.6625C12.7 4.9 12.875 5.2625 12.875 5.65V13.1687"
                stroke="#232323"
                stroke-width="0.8"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              />
              <path
                d="M6 9.5752V10.5127M6.3125 4.10645H8.1875M9.4375 6.29395H5.0625C4.54375 6.29395 4.125 6.7127 4.125 7.23145V13.1689H10.375V7.23145C10.375 6.7127 9.95625 6.29395 9.4375 6.29395Z"
                stroke="#232323"
                stroke-width="0.8"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="flex justify-center items-center w-[34px] h-[34px] bg-[#F6F6F6] rounded-full">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.67019 12.6142L6.39554 14.3396M14.3472 10.6939C13.6146 11.4246 12.6965 11.9414 11.6918 12.1886C10.6871 12.4358 9.63396 12.404 8.646 12.0966L5.11278 15.6224C4.85773 15.8849 4.35513 16.0424 3.99505 15.9899L2.35972 15.7649C1.81961 15.6899 1.31701 15.1798 1.23449 14.6397L1.00944 13.0043C0.956932 12.6443 1.12947 12.1417 1.37702 11.8866L4.90274 8.36088C4.30262 6.41048 4.76771 4.19753 6.31303 2.65971C8.52598 0.446762 12.1192 0.446762 14.3397 2.65971C16.5601 4.87267 16.5601 8.4809 14.3472 10.6939Z"
                stroke="#232323"
                stroke-width="0.8"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.3791 7.74558C10.6776 7.74558 10.9638 7.62703 11.1748 7.41601C11.3858 7.20498 11.5044 6.91878 11.5044 6.62035C11.5044 6.32192 11.3858 6.03571 11.1748 5.82469C10.9638 5.61367 10.6776 5.49512 10.3791 5.49512C10.0807 5.49512 9.7945 5.61367 9.58348 5.82469C9.37246 6.03571 9.25391 6.32192 9.25391 6.62035C9.25391 6.91878 9.37246 7.20498 9.58348 7.41601C9.7945 7.62703 10.0807 7.74558 10.3791 7.74558Z"
                stroke="#232323"
                stroke-width="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <h1 className="xl:w-[500px] text-center text-4xl xl:text-5xl ">
          Discover Your Ideal Property Type
        </h1>
      </div>
      <div className="w-full  grid grid-cols-2 px-3 pt-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div>
          <div className="w-[98%] h-[15%] mt-3 sm:h-[20%] sm:mt-60 lg:mt-64 relative">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={one}
              alt=""
              loading="lazy"
            />
            <div className="h-full w-full p-[15px] absolute top-0 flex justify-between items-end">
              <div>
                <p className="font-montreal font-medium text-base text-white  pb-[25px] hidden xl:flex">
                  01
                </p>
                <p className="font-montreal font-medium text-base text-white  ">
                  Luxury Villas
                </p>
              </div>
              <button className="flex justify-center items-center w-[42px] h-[42px] bg-white rounded-full absolute top-4 right-4">
                <PropetyIcon />
              </button>
            </div>
          </div>
          <div className="w-[98%] h-[10%] mt-1 sm:mt-80 sm:hidden  relative">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={six}
              alt=""
              loading="lazy"
            />
            <div className="h-full w-full p-[15px] absolute top-0 flex justify-between items-end">
              <div>
                <p className="font-montreal font-medium text-base text-white  pb-[25px] hidden xl:flex">
                  01
                </p>
                <p className="font-montreal font-medium text-base text-white  ">
                  Luxury Villas
                </p>
              </div>
              <button className="flex justify-center items-center w-[42px] h-[42px] bg-white rounded-full absolute top-4 right-4">
                <PropetyIcon />
              </button>
            </div>
          </div>
          <div className="w-[98%] h-[10%] mt-1 sm:hidden relative">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={eleven}
              alt=""
              loading="lazy"
            />
            <div className="h-full w-full p-[15px] absolute top-0 flex justify-between items-end">
              <div>
                <p className="font-montreal font-medium text-base text-white  pb-[25px] hidden xl:flex">
                  01
                </p>
                <p className="font-montreal font-medium text-base text-white  ">
                  Luxury Villas
                </p>
              </div>
              <button className="flex justify-center items-center w-[42px] h-[42px] bg-white rounded-full absolute top-4 right-4">
                <PropetyIcon />
              </button>
            </div>
          </div>
          <div className="w-[98%] h-[15%] mt-1 sm:hidden relative">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={four}
              alt=""
              loading="lazy"
            />
            <div className="h-full w-full p-[15px] absolute top-0 flex justify-between items-end">
              <div>
                <p className="font-montreal font-medium text-base text-white  pb-[25px] hidden xl:flex">
                  01
                </p>
                <p className="font-montreal font-medium text-base text-white  ">
                  Luxury Villas
                </p>
              </div>
              <button className="flex justify-center items-center w-[42px] h-[42px] bg-white rounded-full absolute top-4 right-4">
                <PropetyIcon />
              </button>
            </div>
          </div>
          <div className="w-[98%] h-[15%] mt-1 sm:h-[30%] relative">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={two}
              alt=""
              loading="lazy"
            />
            <div className="h-full w-full p-[15px] absolute top-0 flex justify-between items-end">
              <div>
                <p className="font-montreal font-medium text-base text-white  pb-[25px] hidden xl:flex">
                  06
                </p>
                <p className="font-montreal font-medium text-base text-white  ">
                Commercial  <br />
                Spaces
                </p>
              </div>
              <button className="flex justify-center items-center w-[42px] h-[42px] bg-white rounded-full absolute top-4 right-4">
                <PropetyIcon />
              </button>
            </div>
          </div>
          <div className="w-[98%] h-[10%] mt-1 sm:hidden relative">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={ten}
              alt=""
              loading="lazy"
            />
            <div className="h-full w-full p-[15px] absolute top-0 flex justify-between items-end">
              <div>
                <p className="font-montreal font-medium text-base text-white  pb-[25px] hidden xl:flex">
                  01
                </p>
                <p className="font-montreal font-medium text-base text-white  ">
                  Luxury Villas
                </p>
              </div>
              <button className="flex justify-center items-center w-[42px] h-[42px] bg-white rounded-full absolute top-4 right-4">
                <PropetyIcon />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[98%] h-[10%] mt-14 sm:h-[30%] relative">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={three}
              alt=""
              loading="lazy"
            />
            <div className="h-full w-full p-[15px] absolute top-0 flex justify-between items-end">
              <div>
                <p className="font-montreal font-medium text-base text-white  pb-[25px] hidden xl:flex">
                  02
                </p>
                <p className="font-montreal font-medium text-base text-white  ">
                Penthouse <br />
                Suites
                </p>
              </div>
              <button className="flex justify-center items-center w-[42px] h-[42px] bg-white rounded-full absolute top-4 right-4">
                <PropetyIcon />
              </button>
            </div>
          </div>
          <div className="w-[98%] h-[15%] mt-1 sm:h-[30%] relative">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={four}
              alt=""
              loading="lazy"
            />
            <div className="h-full w-full p-[15px] absolute top-0 flex justify-between items-end">
              <div>
                <p className="font-montreal font-medium text-base text-white  pb-[25px] hidden xl:flex">
                  07
                </p>
                <p className="font-montreal font-medium text-base text-white  ">
                  Townhouses
                </p>
              </div>
              <button className="flex justify-center items-center w-[42px] h-[42px] bg-white rounded-full absolute top-4 right-4">
                <PropetyIcon />
              </button>
            </div>
          </div>
          <div className="w-[98%] h-[10%] mt-1 sm:h-[20%] relative">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={five}
              alt=""
              loading="lazy"
            />
            <div className="h-full w-full p-[15px] absolute top-0 flex justify-between items-end">
              <div>
                <p className="font-montreal font-medium text-base text-white  pb-[25px] hidden xl:flex">
                  10
                </p>
                <p className="font-montreal font-medium text-base text-white  ">
                Investment
                </p>
              </div>
              <button className="flex justify-center items-center w-[42px] h-[42px] bg-white rounded-full absolute top-4 right-4">
                <PropetyIcon />
              </button>
            </div>
          </div>
          <div className="w-[98%] h-[15%] mt-1 sm:hidden relative">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={seven}
              alt=""
              loading="lazy"
            />
            <div className="h-full w-full p-[15px] absolute top-0 flex justify-between items-end">
              <div>
                <p className="font-montreal font-medium text-base text-white  pb-[25px] hidden xl:flex">
                  01
                </p>
                <p className="font-montreal font-medium text-base text-white  ">
                  Luxury Villas
                </p>
              </div>
              <button className="flex justify-center items-center w-[42px] h-[42px] bg-white rounded-full absolute top-4 right-4">
                <PropetyIcon />
              </button>
            </div>
          </div>
          <div className="w-[98%] h-[10%] mt-1 sm:hidden relative">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={five}
              alt=""
              loading="lazy"
            />
            <div className="h-full w-full p-[15px] absolute top-0 flex justify-between items-end">
              <div>
                <p className="font-montreal font-medium text-base text-white  pb-[25px] hidden xl:flex">
                  01
                </p>
                <p className="font-montreal font-medium text-base text-white  ">
                  Luxury Villas
                </p>
              </div>
              <button className="flex justify-center items-center w-[42px] h-[42px] bg-white rounded-full absolute top-4 right-4">
                <PropetyIcon />
              </button>
            </div>
          </div>
          <div className="w-[98%] h-[15%] mt-1 sm:hidden relative">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={twelve}
              alt=""
              loading="lazy"
            />
            <div className="h-full w-full p-[15px] absolute top-0 flex justify-between items-end">
              <div>
                <p className="font-montreal font-medium text-base text-white  pb-[25px] hidden xl:flex">
                  01
                </p>
                <p className="font-montreal font-medium text-base text-white  ">
                  Luxury Villas
                </p>
              </div>
              <button className="flex justify-center items-center w-[42px] h-[42px] bg-white rounded-full absolute top-4 right-4">
                <PropetyIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="w-[98%] h-[20%] mt-36 relative">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={six}
              alt=""
              loading="lazy"
            />
            <div className="h-full w-full p-[15px] absolute top-0 flex justify-between items-end">
              <div>
                <p className="font-montreal font-medium text-base text-white  pb-[25px] hidden xl:flex">
                 03
                </p>
                <p className="font-montreal font-medium text-base text-white  ">
                Apartments
                </p>
              </div>
              <button className="flex justify-center items-center w-[42px] h-[42px] bg-white rounded-full absolute top-4 right-4">
                <PropetyIcon />
              </button>
            </div>
          </div>
          <div className="w-[98%] h-[18%] mt-1 sm:h-[30%] relative">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={seven}
              alt=""
              loading="lazy"
            />
            <div className="h-full w-full p-[15px] absolute top-0 flex justify-between items-end">
              <div>
                <p className="font-montreal font-medium text-base text-white  pb-[25px] hidden xl:flex">
                  08
                </p>
                <p className="font-montreal font-medium text-base text-white  ">
                Waterfront <br /> 
                Homes
                </p>
              </div>
              <button className="flex justify-center items-center w-[42px] h-[42px] bg-white rounded-full absolute top-4 right-4">
                <PropetyIcon />
              </button>
            </div>
          </div>
          <div className="w-[98%] h-[20%] mt-1 flex flex-col justify-center items-center">
            <img src={monteLogo} alt="image" className="object-cover object-center w-14"/>

            <p className="font-montreal font-normal text-base text-center w-[187px] pt-4 pb-6">
              Explore Our Diverse Range of Property Types and Find Your Perfect
              Match
            </p>
            
            <CatalogDow/>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="w-[98%] h-[18%] mt-14 lg:h-[30%] relative">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={eight}
              alt=""
              loading="lazy"
            />
            <div className="h-full w-full p-[15px] absolute top-0 flex justify-between items-end">
              <div>
                <p className="font-montreal font-medium text-base text-white  pb-[25px] hidden xl:flex">
                  04
                </p>
                <p className="font-montreal font-medium text-base text-white  ">
                  Beachfront <br /> Properties
                </p>
              </div>
              <button className="flex justify-center items-center w-[42px] h-[42px] bg-white rounded-full absolute top-4 right-4">
                <PropetyIcon />
              </button>
            </div>
          </div>
          <div className="lg:w-[98%] h-[20%] mt-1 relative">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={nine}
              alt=""
              loading="lazy"
            />
            <div className="h-full w-full p-[15px] absolute top-0 flex justify-between items-end">
              <div>
                <p className="font-montreal font-medium text-base text-white  pb-[25px] hidden xl:flex">
                  09
                </p>
                <p className="font-montreal font-medium text-base text-white  ">
                  Holiday Homes
                </p>
              </div>
              <button className="flex justify-center items-center w-[42px] h-[42px] bg-white rounded-full absolute top-4 right-4">
                <PropetyIcon />
              </button>
            </div>
          </div>
          <div className="lg:w-[98%] h-[18%] mt-1 lg:h-[30%] relative">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={ten}
              alt=""
              loading="lazy"
            />
            <div className="h-full w-full p-[15px] absolute top-0 flex justify-between items-end">
              <div>
                <p className="font-montreal font-medium text-base text-white  pb-[25px] hidden xl:flex">
                  11
                </p>
                <p className="font-montreal font-medium text-base text-white  ">
                  Eco-friendly <br />
                  Properties
                </p>
              </div>
              <button className="flex justify-center items-center w-[42px] h-[42px] bg-white rounded-full absolute top-4 right-4">
                <PropetyIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="hidden xl:block">
          <div className="w-[98%] h-[18%] mt-64 lg:h-[30%] relative">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={eleven}
              alt=""
              loading="lazy"
            />
            <div className="h-full w-full p-[15px] absolute top-0 flex justify-between items-end">
              <div>
                <p className="font-montreal font-medium text-base text-white  pb-[25px] hidden xl:flex">
                  05
                </p>
                <p className="font-montreal font-medium text-base text-white  ">
                  Golf Course <br /> Residences
                </p>
              </div>
              <button className="flex justify-center items-center w-[42px] h-[42px] bg-white rounded-full absolute top-4 right-4">
                <PropetyIcon />
              </button>
            </div>
          </div>
          <div className="lg:w-[98%] h-[20%] mt-1 relative">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={twelve}
              alt=""
              loading="lazy"
            />
            <div className="h-full w-full p-[15px] absolute top-0 flex justify-between items-end">
              <div>
                <p className="font-montreal font-medium text-base text-white  pb-[25px] hidden xl:flex">
                  12
                </p>
                <p className="font-montreal font-medium text-base text-white  ">
                  Desert Retreats
                </p>
              </div>
              <button className="flex justify-center items-center w-[42px] h-[42px] bg-white rounded-full absolute top-4 right-4">
                <PropetyIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
