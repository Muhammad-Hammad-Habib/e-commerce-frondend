import React from "react";
import demo from "../asset/heroSectionBowl.png";

const AboutUs = () => {
  return (
    <section className="w-full second-main-bg p-4 sm:py-20 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* --- Left Content --- */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#5C3B0B] mb-4">
            About Us
          </h2>

          <p className="text-[#6f4e20] leading-relaxed text-lg mb-3 sm:mb-6">
            At <span className="font-bold main-text-color">KachaPapad.pk</span>,
            we bring you handcrafted, fresh, and authentic kacha papad made with
            premium natural ingredients. Our recipes stay true to traditional
            methods to deliver unmatched crunch and taste.
          </p>

          <p className="text-[#6f4e20] leading-relaxed text-lg">
            We proudly serve you high-quality papad varieties including Pipe,
            Slanty, and Ring — all prepared with love, hygiene, and the real
            taste of tradition.
          </p>
        </div>

        {/* --- Right Image --- */}
        <div className="flex justify-center">
          <img
            src={demo}
            alt="About Us"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
