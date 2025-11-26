import demo from "../asset/heroSectionBowl.png";
const FeaturedProducts = () => {
  return (
    <section className="w-full py-16 ">
      {/* Section heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold main-text-color tracking-wide">
          Featured Products
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Fresh, crispy, handmade papads delivered to your home.
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
          <img
            src={demo}
            alt="Papad"
            className="w-full h-60 object-contain p-1.5"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold main-text-color">Classic</h3>
            <p className="text-gray-600 mt-1">Crispy, fresh and handmade.</p>
            <p className="text-lg font-bold text-[#ce6c45] mt-3">Rs. 240</p>

            <button className="mt-4 w-full flex items-center justify-center py-2 custom-button">
              <span>Add to Cart</span>
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
          <img
            src={demo}
            alt="Papad"
            className="w-full h-60 object-contain p-1.5"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold main-text-color">Masala</h3>
            <p className="text-gray-600 mt-1">Crunchy & spicy flavors.</p>
            <p className="text-lg font-bold text-[#ce6c45] mt-3">Rs. 260</p>

            <button className="mt-4 w-full flex items-center justify-center py-2 custom-button">
              <span>Add to Cart</span>
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
          <img
            src={demo}
            alt="Papad"
            className="w-full h-60 object-contain p-1.5"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold main-text-color"> Mix</h3>
            <p className="text-gray-600 mt-1">Perfect for snack lovers.</p>
            <p className="text-lg font-bold text-[#ce6c45] mt-3">Rs. 280</p>

            <button className="mt-4 w-full flex items-center justify-center py-2 custom-button">
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
