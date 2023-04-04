import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2 ">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-6xl sm:text-5xl font-bold text-4xl md:py-6">
          GROW WITH DATA
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl font-bold text-xl py-4">
            Fast,flexible financing for
          </p>

          <p className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4 text-gray-500">
            <TypeWriterEffect
              startDelay={2000}
              cursorColor=""
              multiText={["BTB", "BTC", "SASS"]}
              multiTextDelay={2000}
              typeSpeed={70}
            />
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platform.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto py-3 text-black my-6">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
