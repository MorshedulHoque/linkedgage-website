import React from "react";
import "./curve.css";

const Carve = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="w-full max-lg:h-[300px] lg:h-[600px] bg-gradient-to-r from-[#0EA5E9] to-[#020A4F] "></div>
      <div className="absolute top-0 z-10 max-lg:h-20 lg:h-40 bg-black w-full custom-curve"></div>
      <div className="absolute bottom-0 z-10 max-lg:h-20 lg:h-40 bg-black w-full custom-curve-down"></div>
    </div>
  );
};

export default Carve;
