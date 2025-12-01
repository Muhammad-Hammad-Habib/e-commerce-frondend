import React from "react";
import heroSectionBlow from "../asset/heroSectionBowl.png";

const HeroSection = () => {
  return (
    <div className="second-main-bg min-h-[90vh] flex items-center py-3 px-3 sm:px-8  md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-5 md:gap-10 items-center w-full">
        {/* LEFT TEXT AREA */}
        <div>
          <h1 className="text-4xl  md:text-5xl font-extrabold main-text-color leading-tight">
            Lorem ipsum dolor sit, amet
          </h1>

          <p className="text-[#6D4C33] mt-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            vitae, blanditiis assumenda quaerat dignissimos fugiat labore. Cum
            corrupti sed sequi ab veniam architecto culpa iste, molestias atque
            reiciendis deleniti esse.
          </p>

          <button className="mt-6 px-6 py-3  custom-button">Shop Now</button>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="flex justify-center">
          <img
            src={heroSectionBlow}
            alt="Kacha Papad Bowl"
            className="w-fit sm:w-[95%] drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
