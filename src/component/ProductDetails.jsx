import React, { useState } from "react";
import demo from "../asset/heroSectionBowl.png";
import ProductCard from "./ProductCard";

const ProductDetail = () => {
  const images = [demo, demo, demo, demo];
  const [activeImg, setActiveImg] = useState(images[0]);

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
  ];

  return (
    <section className="second-main-bg min-h-[calc(100vh-65px)] px-4 py-10">
      <div className="max-w-7xl mx-auto ">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* IMAGES */}
          <div>
            <div className="rounded-2xl  shadow border border-[#f2d5b3]">
              <img
                src={activeImg}
                alt="product"
                className="w-fit rounded-2xl  drop-shadow-xl"
              />
            </div>

            <div className="flex justify-center gap-4 mt-2">
              {images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setActiveImg(img)}
                  className="cursor-pointer   rounded-xl"
                >
                  <img src={img} className="w-20  object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* DETAILS */}
          <div>
            <h1 className="text-4xl font-bold main-text-color">
              Classic Pipe Papad
            </h1>

            <p className="text-2xl font-semibold text-[#D86F1A] mt-3">
              Rs. 250
            </p>

            <p className="text-[#7A5336] mt-4">
              Crispy, fresh, handmade papad made with premium lentils.
            </p>

            {/* DESCRIPTION */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold main-text-color mb-2">
                Product Details
              </h3>
              <p className="text-[#7A5336] leading-relaxed">
                Classic Pipe Papad is a traditional Indian snack made using
                high-quality lentil flour and authentic spices. Each papad is
                sun-dried and prepared hygienically to ensure crispiness,
                freshness, and rich flavor. Perfect for snacks or meals.
              </p>
            </div>

            <div className="flex items-center mt-4">
              <button className="custom-button px-8 py-3">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold main-text-color mb-6">
            More from this Category
          </h2>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">

            {/* Card 1 */}
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
