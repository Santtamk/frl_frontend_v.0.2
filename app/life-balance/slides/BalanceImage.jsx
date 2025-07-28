import Image from "next/image";
import React from "react";

const BalanceImage = ({ slideCount }) => {
  return (
    <div className="relative w-48 md:w-[20rem] md:h-[20rem] lg:w-[37.5rem] h-full lg:h-[37.5rem] aspect-square overflow-hidden lg:px-0">
      {slideCount === 1 ? (
        <Image
          src="/life-balance/frame1.webp"
          alt="Straight Pose"
          fill
          priority
        />
      ) : (
        <Image
          src="/life-balance/frame2.webp"
          alt="Straight Pose"
          fill
          priority
        />
      )}
    </div>
  );
};

export default BalanceImage;
