import React from "react";

interface FlipCardProps {
  title: string;
  items: string[];
  frontImage: string;
  backImage: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ title, items, frontImage, backImage }) => {
  return (
    <div className="w-[98%]    sm:w-full md:w-[45%] lg:w-[30%]   h-[500px] px-0  md:px-1 flex-shrink-0 group">
      {/* Flip wrapper */}
      <div className="relative  w-full h-full transform [transform-style:preserve-3d] group-hover:rotate-x-180 duration-[1200ms] ease-in-out will-change-transform">

        {/* Front Side */}
        <div
          className="absolute w-full h-full rounded text-white p-6 [backface-visibility:hidden] flex flex-col justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${frontImage})` }}
        >
          <div className="px-2 py-2 h-full flex justify-between items-start flex-col">
            <h2 className=" text-[22px] md:text-[38px] lg:text-[50px] font-bold mb-4   leading-12">{title}</h2>
            <ul className="space-y-1 block  ">
              {items.map((item, idx) => (
                <li key={idx} className="  text-[14px]  md:text-[18px] lg:text-[20px]">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full rounded text-white p-6 [backface-visibility:hidden] bg-cover bg-center transform rotate-x-180"
          style={{ backgroundImage: `url(${backImage})` }}
        >
          <div className="px-2 py-2 h-full flex justify-between items-start flex-col">
            <h2 className=" text-[22px] md:text-[38px] lg:text-[50px] font-bold mb-4  leading-12">{title}</h2>
            <ul className="space-y-1">
              {items.map((item, idx) => (
                <li key={idx} className="text-[20px]">{item}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlipCard;
