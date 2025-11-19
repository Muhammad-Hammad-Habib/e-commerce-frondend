import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 second-main-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold main-text-color">
            Why Choose Us
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We bring you quality, freshness, and taste you can trust — every
            time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:flex sm:justify-center grid-cols-1 md:grid-cols-3 gap-8 ">
          {/* Card 1 */}
          <div className="p-6 card-bg rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#FFD89C] mb-4 text-2xl">
              ⭐
            </div>
            <h3 className="text-xl font-semibold main-text-color">
              Premium Quality
            </h3>
            <p className="mt-2 text-gray-600">
              We use top-grade ingredients to ensure unbeatable taste and
              freshness.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 card-bg rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#FFD89C] mb-4 text-2xl">
              🚚
            </div>
            <h3 className="text-xl font-semibold main-text-color">
              Fast Delivery
            </h3>
            <p className="mt-2 text-gray-600">
              Your order is packed with care and delivered quickly to your
              doorstep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
