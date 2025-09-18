"use client";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

// Lottie player can reference window/document; load only on client
const Lottie = dynamic(() => import("@lottielab/lottie-player/react"), {
  ssr: false,
});

const BalanceImage = ({ image }) => {
  return (
    <div className=" w-48 md:w-[20rem] md:h-[20rem] lg:w-[37.5rem] h-full lg:h-[37.5rem] aspect-square overflow-hidden lg:px-0">
      <div className="sm:scale-[2] scale-[1.8] md: origin-center w-full h-full">
        <Lottie
          src={image}
          autoplay
          loop
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default BalanceImage;
