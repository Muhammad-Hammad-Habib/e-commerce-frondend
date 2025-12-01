import React from "react";
import demo from "../asset/heroSectionBowl.png";
import Footer from "./Footer";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Classic ",
      price: 250,
      desc: "asdmas d asd asd  asdsas",
      img: demo,
    },
    {
      id: 2,
      title: "assa",
      price: 300,
      desc: "asdmas d asd asd  asdsas",
      img: demo,
    },
    {
      id: 3,
      title: "asas",
      price: 300,
      desc: "asdmas d asd asd  asdsas",
      img: demo,
    },
    {
      id: 4,
      title: "asass",
      price: 300,
      desc: "asdmas d asd asd  asdsas",
      img: demo,
    },
    {
      id: 5,
      title: "asass",
      price: 300,
      desc: "asdmas d asd asd  asdsas",
      img: demo,
    },
    {
      id: 6,
      title: "asass",
      price: 300,
      desc: "asdmas d asd asd  asdsas",
      img: demo,
    },
  ];

  const categories = ["All", "Pipe", "Ring", "Slanty", "Masala", "Classic"];

  return (
    <>
      <section className="w-full py-16 second-main-bg">
        <div className="max-w-6xl mx-auto px-1">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center main-text-color">
            Products
          </h2>
          <p className="text-center text-[#8A6F5A] mt-2">
            Freshly handmade papads delivered to your doorstep.
          </p>

          {/* Filters */}
          <div className="flex justify-center mt-6 mb-10 gap-3 flex-wrap">
            {categories.map((cat, index) => (
              <button
                key={index}
                className="px-4 py-2 custom-button transition-all shadow-sm"
                // className="px-4 py-2 bg-white border border-[#f2d5b3] rounded-xl text-[#7a5336] hover:bg-[#ffe8c9] transition-all shadow-sm"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products grid */}
          <div className="max-w-6xl px-2 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {products.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
              >
                <img
                  src={demo}
                  alt="Papad"
                  className="w-full h-50 object-contain  p-3"
                />
                <div className="p-3">
                  <h3 className="text-xl font-semibold main-text-color">
                    Classic
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Crispy, fresh and handmade.
                  </p>
                  <p className="text-lg font-bold text-[#ce6c45] mt-3">
                    Rs. 240
                  </p>

                  <button className="mt-4 w-full flex items-center justify-center py-2 custom-button">
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {/* <div className="flex justify-center gap-4 mt-12 text-[#7a5336]">
          <button className="px-3 py-1 border rounded-md bg-white hover:bg-[#ffe8c9]">
            &lt;
          </button>
          <button className="px-3 py-1 border rounded-md bg-[#fd8e36] text-white">
            1
          </button>
          <button className="px-3 py-1 border rounded-md bg-white hover:bg-[#ffe8c9]">
            2
          </button>
          <button className="px-3 py-1 border rounded-md bg-white hover:bg-[#ffe8c9]">
            3
          </button>
          <button className="px-3 py-1 border rounded-md bg-white hover:bg-[#ffe8c9]">
            &gt;
          </button>
        </div> */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Products;
