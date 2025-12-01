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
      {/* <div className="px-4 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-center"> */}
      <div className="gap-2 px-1.5 mx-auto grid grid-cols-2 sm:px-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 text-center">
        {/* Card 1 */}
        {[1, 2, 3, 4].map((value) => {
          return (
            <div
              key={value}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <img
                src={demo}
                alt="Papad"
                className="w-full rounded-2xl sm:rounded-3xl p-1 sm:p-3"
              />
              <div className="p-1.5 sm:p-3">
                <h3 className="text-xl font-semibold main-text-color">
                  Classic
                </h3>
                <p className="text-gray-600 sm:mt-1 ">
                  Crispy, fresh and handmade.
                </p>
                <div  className="sm:grid sm:grid-cols-2 justify-center items-center">
                  <p className="text-lg font-bold text-[#ce6c45] sm:mt-3">
                    Rs. 240
                  </p>

                  <button className="mt-1 sm:mt-4 w-full m-auto flex items-center justify-center py-2 custom-button">
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProducts;
