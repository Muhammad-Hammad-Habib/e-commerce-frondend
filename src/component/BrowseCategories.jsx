import React from "react";
import demo from "../asset/heroSectionBowl.png";

const BrowseCategories = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-1 sm:px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-extrabold text-center main-text-color mb-2">
          Browse Categories
        </h2>
        <p className="text-center text-[#7A4A21] mb-7 sm:mb-12">
          Find your favorite type of crunchy kacha papad
        </p>

        {/* Category Grid */}
        <div className="px-1 gap-2 mx-auto grid grid-cols-2 sm:px-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 text-center">
          {/* Category Card */}

          {[1, 2, 3, 4].map((value) => {
            return (
              <div
                key={value}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
              >
                <img
                  src={demo}
                  alt="Papad"
                  className="w-full rounded-2xl sm:rounded-3xl object-contain p-1.5 sm:p-3"
                />
                <div className="p-1.5 sm:p-3">
                  <h3 className="text-xl font-semibold main-text-color">
                    Classic
                  </h3>

                  <button className="mt-1 sm:mt-4 w-full m-auto sm:w-35 flex items-center justify-center py-2 custom-button">
                    <span>View Products</span>
                  </button>
                </div>
              </div>
            );
          })}

          {/* <div className="bg-white rounded-xl shadow-md hover:shadow-lg duration-300 p-6 text-center">
            <img src={demo} alt="Pipe Papad" className="  mx-auto mb-4" />
            <h3 className="text-xl font-semibold main-text-color">Pi</h3>
            <button className="mt-4 px-5 py-2 custom-button font-medium">
              View Products
            </button>
          </div> */}

          {/* Category Card */}
          {/* <div className="card-bg rounded-xl shadow-md hover:shadow-lg duration-300 p-6 text-center">
            <img
              src={demo}
              alt="Moong Papad"
              className="w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#5A2E0F]">Moong</h3>
            <button className="mt-4 px-5 py-2 bg-[#FD8E36] hover:bg-[#D66A23] text-white font-medium rounded-lg">
              View Products
            </button>
          </div> */}

          {/* Category Card */}
          {/* <div className="card-bg rounded-xl shadow-md hover:shadow-lg duration-300 p-6 text-center">
            <img
              src={demo}
              alt="Urad Papad"
              className="w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#5A2E0F]">Urad</h3>
            <button className="mt-4 px-5 py-2 bg-[#FD8E36] hover:bg-[#D66A23] text-white font-medium rounded-lg">
              View Products
            </button>
          </div> */}

          {/* Category Card */}
          {/* <div className="card-bg rounded-xl shadow-md hover:shadow-lg duration-300 p-6 text-center">
            <img
              src={demo}
              alt="Masala Papad"
              className="w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#5A2E0F]">Masala</h3>
            <button className="mt-4 px-5 py-2 bg-[#FD8E36] hover:bg-[#D66A23] text-white font-medium rounded-lg">
              View Products
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;
