import React, { useState } from "react";
import PointTracker from "../ui/PointTracker";
import { ArrowRight } from "lucide-react";
import Circle from "../ui/Circle";

const QuestionSlides = ({
  header,
  setSlideIndex,
  answerCollector,
  slideIndex,
}) => {
  const [currentAnswer, setCurrentAnswer] = useState(1);
  const savingAndGoingToNextQuestion = (e) => {
    e.preventDefault();
    answerCollector(currentAnswer);
    setSlideIndex();
  };
  return (
    <div className="flex flex-col justify-between gap-5 ">
      <div className="flex justify-center items-center text-center lg:w-1/2 relative">
        {/* Responsive square container for the circles */}
        <div className="w-[70vw] max-w-[15.625rem] aspect-square lg:w-[35.75rem] lg:h-[35.75rem] rounded-full relative">
          <Circle stage={slideIndex} />
        </div>
      </div>

      <form
        id="question-form"
        onSubmit={savingAndGoingToNextQuestion}
        className="overflow-hidden  lg:pb-0 flex flex-col gap-5"
      >
        <div className="flex flex-col justify-between gap-4">
          {/* question */}
          <div className="text-2xl font-semibold">{header}</div>
          <div className="text-lg font-medium">
            Rate your level of satisfaction in a scale of 1 - 10
          </div>
        </div>
        {/* slider goes here */}
        <div className="fixed bottom-19 left-0 flex lg:static lg:flex-none w-full ">
          <PointTracker onChange={setCurrentAnswer} />
        </div>
        {/* Desktop/large screens: inline button */}
        <div className="hidden lg:flex items-baseline justify-start lg:items-start">
          <button className="flex justify-center items-center gap-[0.6rem] font-medium text-base text-[#2D201B] bg-[#F6F5F0] rounded-3xl px-[1.75rem] py-[0.75rem] lg:text-xl hover:scale-105 cursor-pointer transition-all">
            Next
            <ArrowRight className="w-[1.5rem] h-[1.3rem]" />
          </button>
        </div>
      </form>

      {/* Mobile: sticky bottom Next button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-[#19667A] flex justify-end">
        <button
          form="question-form"
          type="submit"
          className=" flex justify-center items-center gap-[0.6rem] font-medium text-base text-[#2D201B] bg-[#F6F5F0] rounded-3xl px-[1.75rem] py-[0.9rem] hover:scale-[1.02] cursor-pointer transition-all"
        >
          Next
          <ArrowRight className="w-[1.5rem] h-[1.3rem]" />
        </button>
      </div>
    </div>
  );
};

export default QuestionSlides;
