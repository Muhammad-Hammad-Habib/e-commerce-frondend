import React from "react";
import demo1 from "../asset/plainSlanty.png";
import demo2 from "../asset/colorRing.png";
import demo3 from "../asset/colorSlanty.png";
import Footer from "./Footer";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Classic ",
      price: 250,
      desc: "asdmas d asd asd  asdsas",
      img: demo1,
    },
    {
      id: 2,
      title: "Classic",
      price: 300,
      desc: "asdmas d asd asd  asdsas",
      img: demo3,
    },
    {
      id: 3,
      title: "Classic",
      price: 300,
      desc: "asdmas d asd asd  asdsas",
      img: demo3,
    },
    {
      id: 4,
      title: "Classic",
      price: 300,
      desc: "asdmas d asd asd  asdsas",
      img: demo2,
    },
    {
      id: 5,
      title: "Classic",
      price: 300,
      desc: "asdmas d asd asd  asdsas",
      img: demo2,
    },
    {
      id: 6,
      title: "Classic",
      price: 300,
      desc: "asdmas d asd asd  asdsas",
      img: demo1,
    },
    {
      id: 7,
      title: "Classic",
      price: 300,
      desc: "asdmas d asd asd  asdsas",
      img: demo1,
    },
  ];

  const categories = ["All", "Pipe", "Ring", "Slanty", "Masala", "Classic"];

  return (
    <>
      <section className="w-full py-16 second-main-bg">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center main-text-color">
            Products
          </h2>
          <p className="text-center text-[#7A6252] mt-2">
            Freshly handmade papads delivered to your doorstep.
          </p>

          {/* Filters */}
          <div className="flex justify-center mt-6 mb-10 gap-3 flex-wrap">
            {categories.map((cat, index) => (
              <button
                key={index}
                className="px-4 py-2 custom-button transition-all shadow-sm"
                // className="px-4 py-2 bg-white border border-[#E6CDB9] rounded-xl text-[#5F4638] hover:bg-[#F6D7BD] transition-all shadow-sm"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  px-3">
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>

          {/* Products grid */}

          {/* Pagination */}
          {/* <div className="flex justify-center gap-4 mt-12 text-[#5F4638]">
          <button className="px-3 py-1 border rounded-md bg-white hover:bg-[#F6D7BD]">
            &lt;
          </button>
          <button className="px-3 py-1 border rounded-md bg-[#B94A0A] text-white">
            1
          </button>
          <button className="px-3 py-1 border rounded-md bg-white hover:bg-[#F6D7BD]">
            2
          </button>
          <button className="px-3 py-1 border rounded-md bg-white hover:bg-[#F6D7BD]">
            3
          </button>
          <button className="px-3 py-1 border rounded-md bg-white hover:bg-[#F6D7BD]">
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
