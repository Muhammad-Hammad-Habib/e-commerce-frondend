import React from "react";
import demo from "../asset/heroSectionBowl.png";

const BrowseCategories = () => {
  return (
    <section className=" py-16  px-3 sm:px-8  md:px-10">
      <div className="max-w-7xl mx-auto ">
        {/* Section Heading */}
        <h2 className="text-3xl font-extrabold text-center main-text-color mb-2">
          Browse Categories asas23141
        </h2>
        <p className="text-center text-[#7A4A21] mb-7 sm:mb-12 ">
          Find your favorite type of crunchy kacha papad
        </p>

        {/* Category Grid */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Category Card */}

          {[1, 2, 3, 4].map((value) => {
            return (
              <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-[#f2d5b3]">
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={demo}
                    alt="title"
                    className="w-full h-[190px]  transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-3 space-y-1">
                  {/* PRICE + CTA */}
                  <div className="flex items-center justify-between mt-1">
                    <h3 className="text-lg font-semibold main-text-color">
                      afasas
                    </h3>

                    <button className="custom-button px-4 py-2 text-sm">
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;
