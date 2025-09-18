import Image from "next/image";
import React from "react";
import Lottie from "@lottielab/lottie-player/react";

const BalanceImage = ({ image }) => {
  return (
    <div className="w-[90vw] sm:w-full sm:max-w-[37.5rem] aspect-square mx-auto">
      <Lottie src={image} autoplay loop style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default BalanceImage;
