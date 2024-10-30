import apartmentImage from "../images/apartment.webp";

function Apartments() {
  return (
    <div className="bg-[#F8F5F2] h-[852px] pt-24 pb-40">
      <div className="container flex flex-col items-center ">
        <div className="flex items-center md:gap-3">
          <button className="flex justify-center items-center w-9 h-9 rounded-full bg-[#232323] md:w-11 md:h-11">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13.1689H13.5"
                stroke="#F8F5F2"
                stroke-width="0.8"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.59375 13.1687L1.625 5.65C1.625 5.26875 1.80625 4.90625 2.10625 4.66875L6.48125 1.2625C6.93125 0.9125 7.5625 0.9125 8.01875 1.2625L12.3937 4.6625C12.7 4.9 12.875 5.2625 12.875 5.65V13.1687"
                stroke="#F8F5F2"
                stroke-width="0.8"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              />
              <path
                d="M6 9.5752V10.5127M6.3125 4.10645H8.1875M9.4375 6.29395H5.0625C4.54375 6.29395 4.125 6.7127 4.125 7.23145V13.1689H10.375V7.23145C10.375 6.7127 9.95625 6.29395 9.4375 6.29395Z"
                stroke="#F8F5F2"
                stroke-width="0.8"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="flex justify-center items-center w-9 h-9 rounded-full bg-[#232323] md:w-11 md:h-11">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.67019 12.6142L6.39554 14.3396M14.3472 10.6939C13.6146 11.4246 12.6965 11.9414 11.6918 12.1886C10.6871 12.4358 9.63396 12.404 8.646 12.0966L5.11278 15.6224C4.85773 15.8849 4.35513 16.0424 3.99505 15.9899L2.35972 15.7649C1.81961 15.6899 1.31701 15.1798 1.23449 14.6397L1.00944 13.0043C0.956932 12.6443 1.12947 12.1417 1.37702 11.8866L4.90274 8.36088C4.30262 6.41048 4.76771 4.19753 6.31303 2.65971C8.52598 0.446762 12.1192 0.446762 14.3397 2.65971C16.5601 4.87267 16.5601 8.4809 14.3472 10.6939Z"
                stroke="#F8F5F2"
                stroke-width="0.8"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.3791 7.74558C10.6776 7.74558 10.9638 7.62703 11.1748 7.41601C11.3858 7.20498 11.5044 6.91878 11.5044 6.62035C11.5044 6.32192 11.3858 6.03571 11.1748 5.82469C10.9638 5.61367 10.6776 5.49512 10.3791 5.49512C10.0807 5.49512 9.7945 5.61367 9.58348 5.82469C9.37246 6.03571 9.25391 6.32192 9.25391 6.62035C9.25391 6.91878 9.37246 7.20498 9.58348 7.41601C9.7945 7.62703 10.0807 7.74558 10.3791 7.74558Z"
                stroke="#F8F5F2"
                stroke-width="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="relative pt-5 w-3/3 overflow-hidden">
                <img src={apartmentImage} alt="image" className="rounded-2xl h-[537px] w-full object-cover object-center"/>
                <h1 className="font-montreal font-bold text-4xl md:text-6xl text-white absolute left-[-500px] top-1/2   w-[2500px]">Apartments with an initial payment from $25,000 interest-free installment plan up to 8 years</h1>
        </div>
      </div>
    </div>
  );
}

export default Apartments;
