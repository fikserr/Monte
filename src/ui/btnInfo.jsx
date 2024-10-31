import React from "react";

function BtnInfo() {
  return (
    <div>
      {" "}
      <button className="flex justify-center items-center bg-white w-9 h-9 rounded-full xl:w-[52px] xl:h-[52px] absolute top-4 right-4 ">
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
  );
}

export default BtnInfo;
