import { useEffect, useRef } from "react"; 
import gsap from "gsap";

const ScrollingText = () => {
  const text = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      text.current, 
      { x: "50%" }, 
      {
        x: "-100%", 
        duration: 20,
        repeat: -1,
        ease: "linear",
      }
    );
  }, []);

  return (
    <h1 
      ref={text} 
      className="font-montreal font-bold text-4xl xl:text-6xl text-white absolute top-1/2 w-[2500px]"
    >
      Apartments with an initial payment from $25,000 interest-free installment plan up to 8 years
    </h1>
  );
};

export default ScrollingText;
