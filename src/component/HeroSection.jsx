import React from "react";
import heroSectionBlow from "../asset/heroSectionBowl.png";

const HeroSection = () => {
  return (
    <div className="bg-[#f7e1bc] min-h-[90vh] flex items-center px-8  md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
        {/* LEFT TEXT AREA */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#4B2E14] leading-tight">
            Lorem ipsum dolor sit, amet
          </h1>

          <p className="text-[#6D4C33] mt-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            vitae, blanditiis assumenda quaerat dignissimos fugiat labore. Cum
            corrupti sed sequi ab veniam architecto culpa iste, molestias atque
            reiciendis deleniti esse.
          </p>

          <button
            className="mt-6 px-6 py-3 bg-linear-to-r from-[#fd8e36] to-[#fbbf77]  hover:from-[#fbbf77] hover:to-[#fd8e36] 
                         text-white font-semibold rounded-lg shadow 
                         transition-all duration-300
                         shadow-md hover:shadow-lg focus:outline-none focus:ring-2 
                         focus:ring-offset-2 focus:ring-[#fd8e36]
                         "
          >
            Shop Now
          </button>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="flex justify-center">
          <img
            src={heroSectionBlow}
            alt="Kacha Papad Bowl"
            className="w-fit md:w-[95%] drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
