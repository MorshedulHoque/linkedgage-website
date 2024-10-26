import React from "react";
import Hero from "./Hero";
import HeroSecond from "./HeroSecond";
import HeroThird from "./HeroThird";
import HeroFourth from "./HeroFourth";
import HeroFifth from "./HeroFifth";
import NewSlider from "./NewSlider";
import ReviewCard from "./ReviewCard";
import FAQ from "./Faq";

const Home = () => {
  return (
    <div className="relative">
      <div>
        <Hero />
      </div>
      <div>
        <HeroSecond />
      </div>
      <div>
        <NewSlider />
      </div>
      <div>
        <HeroThird />
      </div>
      <div>
        <HeroFourth />
      </div>
      <div>
        <ReviewCard />
      </div>
      <div>
        <HeroFifth />
      </div>
      <div>
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
