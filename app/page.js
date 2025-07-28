"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {

  return (
    <div className="min-h-screen bg-custom-gradient text-[#F6F6F6] overflow-hidden px-2 lg:px-7 ">
      <Header />
      <div
        className="
        max-w-[1440px] mx-auto 
       pb-2   h-full lg:flex lg:justify-center lg:items-center
       lg:h-[calc(100vh-theme(spacing.20))] 
       "
      >
        <Hero />
      </div>
    </div>
  );
}
