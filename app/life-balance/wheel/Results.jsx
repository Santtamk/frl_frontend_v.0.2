"use client";
import React, { useMemo, useRef, useState } from "react";
import BalanceWheel from "./BalanceWheel";

// Maps the ordered answers array to the BalanceWheel formData contract
const toFormData = (answers = []) => {
  const safe = (i, def = 5) => {
    const v = Number(answers[i]);
    return Number.isFinite(v) ? v : def;
  };
  return {
    health: safe(0),
    recreation: safe(1),
    relationships: safe(2),
    romance: safe(3),
    finance: safe(4),
    environment: safe(5),
    career: safe(6),
    spiritual: safe(7),
  };
};

const Results = ({ answers, formValues }) => {
  const graphRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  const formData = useMemo(() => toFormData(answers), [answers]);

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const yyyy = today.getFullYear();
      const date = `${dd}/${mm}/${yyyy}`;
      const mod = await import("./generateBalanceWheelImage");
      await mod.generateBalanceWheelImage(graphRef.current, date);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-10 w-full h-full">
      <div className="flex justify-center items-center lg:w-1/2">
        <div className="w-[85vw] max-w-[700px] aspect-square">
          <BalanceWheel formData={formData} graphRef={graphRef} />
        </div>
      </div>

      <div className="flex flex-col gap-4 flex-1 lg:w-1/2 lg:justify-center lg:items-start">
        <div className="capitalize">
          <div className="font-semibold text-3xl pb-2 lg:text-5xl lg:font-bold text-white">
            Your Balance Wheel
          </div>
          <p className="font-medium text-base lg:text-xl text-white/90">
            Country: {formValues?.location || "-"} | ZIP: {formValues?.pinCode || "-"}
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="flex justify-center items-center gap-[0.6rem] font-medium text-base text-[#2D201B] bg-[#F6F5F0] rounded-3xl px-[1.25rem] py-[0.6rem] lg:text-xl hover:scale-105 disabled:opacity-70 disabled:hover:scale-100 transition-all"
          >
            {downloading ? "Preparing..." : "Download Image"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
