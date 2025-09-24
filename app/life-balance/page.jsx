"use client";
import React, { useState } from "react";
import BalanceImage from "./slides/BalanceImage";
import BackButton from "./ui/BackButton";
import slidesData from "./slides/slidesData";
import IntroSlides from "./slides/IntroSlides";
import FormSlide from "./slides/FormSlide";
import QuestionSlides from "./slides/QuestionSlides";
import Results from "./wheel/Results";

const LifeBalancePage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [formValues, setFormVales] = useState({ location: "", pinCode: "" });
  const [answers, setAnswers] = useState([]);

  const currentSlide = slidesData[slideIndex];
  const isResults = slideIndex >= slidesData.length;

  const fromData = (location, pinCode) => {
    setFormVales({ location, pinCode });
  };

  const answerCollector = (ans) => {
    setAnswers((prev) => [...prev, ans]);
  };

  console.log(`formValues: ${JSON.stringify(formValues)}`);
  console.log(`answers: ${answers}`);

  return (
    <div className="h-dvh bg-[#19667A] flex justify-center">
      <div className="px-5 py-5 lg:px-10 lg:py-10 max-w-[1400px] w-full flex flex-col">
        {/* back button */}
        <div className="">
          <BackButton setSlideIndex={setSlideIndex} slideIndex={slideIndex} />
        </div>

        <div className="flex flex-col justify-start h-full flex-1 gap-4 lg:flex-row-reverse overflow-y-hidden z-50 ">
          {!isResults && currentSlide && (
            <>
              {currentSlide.type === "intro" && (
                <IntroSlides
                  header={currentSlide.header}
                  paragraph={currentSlide.paragraph}
                  setSlideIndex={() => setSlideIndex(slideIndex + 1)}
                  image={currentSlide.image}
                />
              )}
              {currentSlide.type === "form" && (
                <FormSlide
                  header={currentSlide.header}
                  setSlideIndex={() => setSlideIndex(slideIndex + 1)}
                  fromDataCallBack={fromData}
                />
              )}
              {currentSlide.type === "question" && (
                <QuestionSlides
                  header={currentSlide.question}
                  setSlideIndex={() => setSlideIndex(slideIndex + 1)}
                  answerCollector={answerCollector}
                  slideIndex={slideIndex}
                />
              )}
            </>
          )}

          {isResults && <Results answers={answers} formValues={formValues} />}
        </div>
      </div>
    </div>
  );
};

export default LifeBalancePage;
