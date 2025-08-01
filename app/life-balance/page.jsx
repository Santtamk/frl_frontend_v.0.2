"use client";
import React, { useState } from "react";
import BalanceImage from "./slides/BalanceImage";
import BackButton from "./ui/BackButton";
import slidesData from "./slides/slidesData";
import IntroSlides from "./slides/IntroSlides";
import FormSlide from "./slides/FormSlide";

const LifeBalancePage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [fromValues, setFormVales] = useState({ location: "", pinCode: "" });

  const currentSlide = slidesData[slideIndex];

  const fromData = (location, pinCode) => {
    setFormVales({ location, pinCode });
  };

  console.log(`fromValues: ${JSON.stringify(fromValues)}`);

  return (
    <div className="h-dvh bg-[#19667A] flex justify-center">
      <div className="px-5 py-5 lg:px-10 lg:py-10 max-w-[1500px] w-full flex flex-col">
        {/* back button */}
        <div className="">
          <BackButton setSlideIndex={setSlideIndex} slideIndex={slideIndex} />
        </div>

        <div className="flex flex-col justify-start h-full flex-1 gap-4 lg:flex-row-reverse ">
          {/* intro screen */}
          {currentSlide.type === "intro" && (
            <IntroSlides
              header={currentSlide.header}
              paragraph={currentSlide.paragraph}
              setSlideIndex={() => setSlideIndex(slideIndex + 1)}
              image={currentSlide.image}
            />
          )}
          {/* form screen */}
          {currentSlide.type === "form" && (
            <FormSlide
              header={currentSlide.header}
              setSlideIndex={() => setSlideIndex(slideIndex + 1)}
              fromDataCallBack={fromData}
            />
          )}
          {/* question screen */}
          {/* {currentSlide.type === "question" && (
            <FormSlide
              header={currentSlide.header}
              setSlideIndex={() => setSlideIndex(slideIndex + 1)}
            />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default LifeBalancePage;
