import React from "react";
import fourth from "../../images/fourth.png";
import fifth from "../../images/fifth.png";
import sixth from "../../images/sixth.png";
import seven from "../../images/seven.png";
import eight from "../../images/eight.png";
import nine from "../../images/nine.png";
import AnimatedGradientBorderTW from "./AnimatedGradientBorderTW";

const HeroThird = () => {
  return (
    <section className="py-12 bg-gradient-to-r bg-black sm:py-12 lg:py-16">
      <style>
        {`
          .card {
            overflow: hidden;
            background-color: #1f2937; /* bg-gray-800 */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
            border-radius: 0.75rem; /* rounded-xl */
            height: 100%;
            border: 1px solid #4b5563; /* border-gray-600 */
            transition: box-shadow 0.3s ease-in-out;
          }

          .card:hover {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* hover:shadow-lg */
          }

          .icon-container {
            padding: 1rem; /* p-4 */
            border-radius: 1rem; /* rounded-2xl */
            background-color: #4b5563; /* bg-gray-700 */
            transition: transform 0.3s ease-in-out, background-color 1s ease-in-out;
          }

          .card:hover .icon-container {
            background-image: linear-gradient(to right, #0ea5e9, #172554); /* hover:from-purple-500 to-blue-500 */
            transform: scale(1.05); /* hover:scale-105 */
          }

          .heading {
            color: #e5e7eb; /* text-gray-50 */
            margin-top: 1.5rem; /* mt-6 */
            font-size: 1.5rem; /* text-2xl */
            font-weight: bold; /* font-bold */
          }

          .paragraph {
            color: #e5e7eb; /* text-gray-50 */
            margin-top: 1.5rem; /* mt-6 */
            font-size: 1rem; /* text-base */
          }

          img {
            width: 2rem; /* consistent width */
            height: 2rem; /* consistent height */
          }
        `}
      </style>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
            Key Features to Boost Your LinkedIn Experience
          </h2>
          <p className="mb-4 text-gray-50">
            Unlock seamless, personalized LinkedIn interactions with AI-driven comments, custom tone selection, and real-time insights—all from an intuitive dashboard.
          </p>
        </div>
        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left py-10">
          {[
            { icon: fourth, title: "Tone Selection", description: "Easily pick from professional, casual, and other custom tones for LinkedIn comments.", aosDuration: "500" },
            { icon: nine, title: "Engagement Optimization", description: "Tailor comments to improve visibility and interactions on your posts and network.", aosDuration: "1000" },
            { icon: sixth, title: "Multilingual Support", description: "Generate comments in multiple languages, making your LinkedIn interactions truly global.", aosDuration: "1500" },
            { icon: seven, title: "Real-Time Insights", description: "Instantly generate comments based on the content of the post, saving you time and effort.", aosDuration: "2000" },
            { icon: eight, title: "Seamless LinkedIn Integration", description: "A convenient icon in every post's comment section makes it easy to access the extension.", aosDuration: "2500" },
            { icon: fifth, title: "Custom Templates", description: "Create and save comment templates for quick access to your most effective responses.", aosDuration: "3000" }
          ].map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

function FeatureCard({ icon, title, description, aosDuration }) {
  return (
    <div className="relative group" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration={aosDuration}>
      <AnimatedGradientBorderTW>
        <div className="relative overflow-hidden bg-gray-800 shadow-md rounded-xl h-full border-4 border-transparent">
          <div className="p-6 sm:p-9 text-center">
            <div className="flex justify-center">
              <div className="icon-container">
                <img src={icon} alt={title} />
              </div>
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-50 sm:mt-6 sm:text-2xl">
              {title}
            </h3>
            <p className="mt-4 text-sm text-gray-50 sm:mt-6 sm:text-base">
              {description}
            </p>
          </div>
        </div>
      </AnimatedGradientBorderTW>
    </div>
  );
}

export default HeroThird;
