"use client";
import React, { useState } from "react";
import BalanceImage from "./slides/BalanceImage";
import { ArrowRight, ChevronLeft } from "lucide-react";
import BackButton from "./ui/BackButton";
import Slides from "./slides/Slides";

const LifeBalancePage = () => {
  const [slideCount, setSlideCount] = useState(1);
  return (
    <div className="h-dvh bg-[#19667A] flex justify-center">
      <div className="px-5 py-5 lg:px-10 lg:py-10 max-w-[1500px] w-full flex flex-col">
        {/* back button */}
        <div className="">
          <BackButton setSlideCount={setSlideCount} slideCount={slideCount} />
        </div>

        <div className="flex flex-col justify-start h-full flex-1 gap-4 lg:flex-row-reverse ">
          {/* balance image */}
          <div className="flex justify-center lg:w-1/2">
          
            <BalanceImage  slideCount ={slideCount}/>
          </div>
          {/* text section */}
          {slideCount === 1 ? (
            <Slides
              header={` Life balance Wheel`}
              paragraph={`The Life Balance Wheel Tool helps you gain insight into your life by
          examining your environment and emotions. It assesses eight key areas,
          revealing what’s happening at home, work, and in your relationships,
          along with your feelings about them. This tool highlights any changes
          you may want or need to make.`}
              setSlideCount={setSlideCount}
            />
          ) : slideCount === 2 ? (
            <Slides
              header={` Life balance Wheel`}
              paragraph={`This is a personal evaluation focused on your own contentment, not how others see you. Answer quickly and honestly. We’ll only record your country and ZIP code. After completing all 8 questions, you can download a summary of your answers.`}
              setSlideCount={setSlideCount}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LifeBalancePage;
