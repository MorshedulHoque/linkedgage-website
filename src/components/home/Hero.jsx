import React from "react";
import Blue from "../../images/Hero_blue.png";
import BubbleLg from "../../images/bubble_big.png";
import BubbleMd from "../../images/bubble_medium.png";
import BubbleSm from "../../images/bubble_small.png";
import MiddleLight from "../../images/Ellipse 5.png";
import demo from "../../images/1.png";

const Hero = () => {
  return (
    <div className="min-h-fit bg-black relative z-0 absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      {/* Hero Card */}
      <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 z-10 px-4 md:px-0 w-full max-w-2xl">

        <div className="absolute">
          <img src={demo} alt="" className="" />
        </div>
      </div>
      {/* Hero Card End */}

      {/* Bubbles */}
      <div className="absolute z-10 top-20 left-10 md:top-40 md:left-60">
        <img src={BubbleLg} alt="" className="w-24 sm:w-32 md:w-48" />
      </div>

      <div className="absolute z-10 top-10 right-10 md:top-20 md:right-40">
        <img src={BubbleMd} alt="" className="w-16 sm:w-24 md:w-32" />
      </div>

      <div className="absolute z-10 left-1/2 transform -translate-x-1/2 -translate-y-[12%]">
        <img src={MiddleLight} alt="Middle Light" className="" />
      </div>

      <div className="absolute z-10 -top-5 left-1/2 transform -translate-x-1/2 md:-top-10 md:left-[45%]">
        <img src={BubbleSm} alt="" className="w-12 sm:w-16 md:w-24" />
      </div>
      {/* Bubble End */}

      <div className="text-gray-50 flex flex-col gap-4 py-8 md:py-16 relative z-10 px-4">
        <h1 className="text-center font-bold text-4xl md:text-5xl lg:text-6xl">
          Elevate Your LinkedIn <br /> <span>Conversations</span>
        </h1>
        <p className="text-center text-base md:text-lg lg:text-xl mb-6">
          Generate engaging comments tailored to your tone and content!
        </p>
        <div className="flex justify-center">
          <button className="btn btn-ghost slow-glow-button bg-gradient-to-r from-lightBlue to-blue-950 text-white border-0 hover:from-blue-950 hover:to-blue-400 shadow-md text-sm md:text-lg transition-all duration-800 ease-in-out">
            <div className="indicator">Download Extension</div>
          </button>
          <style jsx>{`
            @keyframes glowRotate {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }

            .slow-glow-button {
              position: relative;
              overflow: hidden;
              padding: 10px 20px;
            }

            .slow-glow-button::before {
              content: '';
              position: absolute;
              top: -150%;
              left: -150%;
              height: 400%;
              width: 400%;
              background: conic-gradient(
                transparent,
                transparent,
                transparent,
                #ffffff
              );
              animation: glowRotate 4s linear infinite;
            }

            .slow-glow-button::after {
              content: '';
              position: absolute;
              inset: 2px;
              background: inherit; /* Inherits your gradient background */
              z-index: 1;
              border-radius: inherit;
            }

            .slow-glow-button:hover::before {
              animation-duration: 2s;
            }

            .slow-glow-button > * {
              position: relative;
              z-index: 2;
            }
          `}</style>
        </div>
      </div>

      <div className="w-full">
        <img src={Blue} alt="" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Hero;
