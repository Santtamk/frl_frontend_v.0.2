import { ArrowRight } from "lucide-react";
import React from "react";
import BalanceImage from "./BalanceImage";

// count starts at 1
// 1 is about
// 2 is instructions
// 3 is zip code
// 4 to 11 is question
const IntroSlides = ({ header, paragraph, setSlideIndex, image }) => {
  return (
    <div className="flex flex-col lg:flex-row-reverse justify-between h-full  gap-8 pt-10">
      <div className="flex justify-center lg:w-1/2">
        <BalanceImage image={image} />
      </div>
      <div className="flex flex-col justify-between h-full flex-1 lg:w-1/2 lg:justify-center lg:items-start lg:gap-7">
        <div className="capitalize">
          <div className="font-semibold text-3xl pb-2 lg:text-5xl lg:font-bold text-center">
            {header}
          </div>
          <p className="font-medium text-base lg:text-xl text-center">
            {paragraph}
          </p>
        </div>
        {/* next button */}
        <div className="flex items-baseline justify-end  lg:justify-start lg:items-start">
          <button
            className="flex justify-center items-center gap-[0.6rem] font-medium text-base text-[#2D201B] bg-[#F6F5F0] rounded-3xl px-[1.75rem] py-[0.75rem] lg:text-xl hover:scale-105 cursor-pointer transition-all"
            onClick={setSlideIndex}
          >
            Explore Now
            <ArrowRight className="w-[1.5rem] h-[1.3rem]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroSlides;
