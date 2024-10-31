
import DowMark from '../icons/dowMark'

function CatalogDow() {
  return (
    <button className="w-[186px] h-10 bg-[#393939] rounded-[80px] flex gap-2 items-center p-[3px] font-montreal font-normal text-base text-white xl:w-[195px] xl:h-[45px]   ">
            <span className="bg-white w-[34px] h-[34px] rounded-full flex justify-center items-center xl:w-[37px] xl:h-[37px]">
              <DowMark />
            </span>
            Catalog Download
          </button>
  )
}

export default CatalogDow