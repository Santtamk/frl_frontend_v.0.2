"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import React from "react";

const BackButton = ({ slideIndex, setSlideIndex }) => {
  const router = useRouter();
  const gotToPreviousScreen = () => {
    // If on the first slide, go to /resource
    if (slideIndex === 0) {
      router.push("/");
      // If on the first slide, go to /resource
    } else if (slideIndex > 0 && slideIndex <= 11) {
      setSlideIndex((prev) => prev - 1);
    }
  };

  return (
    <button
      className="w-[3.125rem] h-[3.125rem]  lg:h-[5rem] lg:w-[5rem] bg-[#EEFCFD] rounded-full flex justify-center items-center hover:bg-[#D9F5F7] transition-all duration-200 cursor-pointer hover:scale-105"
      onClick={gotToPreviousScreen}
    >
      <ChevronLeft className="text-[#0F313D] h-4 w-4 lg:h-8 lg:w-8 " />
    </button>
  );
};

export default BackButton;
