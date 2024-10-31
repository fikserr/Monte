import future from "../images/future.webp";

function Future() {
  return (
    <div className="py-20 h-[855px] xl:py-10 xl:h-[810px]">
      <div className="container">
        <div className="relative w-full h-full">
          <img
            src={future}
            alt="image"
            className="object-center object-cover rounded-2xl w-full h-[700px]"
          />
          <div className="flex flex-col absolute top-0 py-10 px-5 xl:p-[60px]">
            <h1 className="font-montreal font-bold text-white text-4xl xl:text-[68px] xl:font-medium leading-[80px]">Built Your Future <br /> With Us</h1>
            <button className=" px-[15px] py-[10px] bg-white rounded-[80px] mt-6 w-40  font-montreal font-normal text-base xl:text-lg xl:w-[182px]">Start Your Journey </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Future;
