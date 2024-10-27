import React from "react";
import Globe from "../../images/Globe.png";
import HeroBubbleLg from "../../images/HeroBubbleLg.png";
import HeroBubbleSm from "../../images/HeroBubbleSm.png";

const HeroFifth = () => {
  return (
    <div className="min-h-fit bg-black pt-32 md:pt-20 pb-20 px-4">
      <div className="flex flex-col md:flex-row gap-12 md:gap-28 items-center relative">
        {/* Bubble */}
        <div className="absolute -top-10 left-[10%]">
          <img src={HeroBubbleSm} alt="" />
        </div>
        <div className="absolute top-[80%] left-[45%]">
          <img src={HeroBubbleLg} alt="" />
        </div>
        {/* Bubble End */}
        <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0">
          <img
            src={Globe}
            alt="Globe"
            className="w-3/4 md:w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
          Let’s Connect!
          </h2>
          <p className="mb-4 text-gray-50 text-base md:text-lg w-3/5">
            {/* A good design is not only aesthetically pleasing, but{" "}
            <br className="hidden md:inline" /> also functional. It should be
            able to solve the problem. */}
            Have questions, feedback, or ideas? We’d love to hear from you! Reach out and let’s discuss how we can support your journey. Fill out the form, and we’ll get back to you shortly.
          </p>
          <form
            action=""
            className="flex flex-col gap-4 items-center md:items-start"
          >
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
            />
            <textarea
              placeholder="Bio"
              className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            ></textarea>
          </form>
          <button className="btn btn-ghost bg-gradient-to-r from-lightBlue to-blue-950 text-white border-0 hover:from-blue-950 hover:to-blue-400 shadow-md text-lg mt-6">
            <div className="indicator">Get in Touch</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroFifth;
