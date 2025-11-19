import React from "react";
import demo from "../asset/heroSectionBowl.png";

const BrowseCategories = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-extrabold text-center text-[#5A2E0F] mb-2">
          Browse Categories
        </h2>
        <p className="text-center text-[#7A4A21] mb-12">
          Find your favorite type of crunchy kacha papad
        </p>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Category Card */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg duration-300 p-6 text-center">
            <img
              src={demo}
              alt="Pipe Papad"
              className="w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#5A2E0F]">Pipe</h3>
            <button className="mt-4 px-5 py-2 custom-button font-medium">
              View Products
            </button>
          </div>

          {/* Category Card */}
          <div className="card-bg rounded-xl shadow-md hover:shadow-lg duration-300 p-6 text-center">
            <img
              src={demo}
              alt="Ring Papad"
              className="w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#5A2E0F]">Ring</h3>
            <button className="mt-4 px-5 py-2 custom-button font-medium">
              View Products
            </button>
          </div>

          {/* Category Card */}
          <div className="card-bg rounded-xl shadow-md hover:shadow-lg duration-300 p-6 text-center">
            <img
              src={demo}
              alt="Slanty Papad"
              className="w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#5A2E0F]">Slanty</h3>
            <button className="mt-4 px-5 py-2 custom-button font-medium">
              View Products
            </button>
          </div>

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
