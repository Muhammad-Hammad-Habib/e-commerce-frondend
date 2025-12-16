import demo from "../asset/heroSectionBowl.png";
import ProductCard from "./ProductCard";

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
const FeaturedProducts = () => {
  return (
    <section className="w-full py-16 px-3  sm:px-8  md:px-10">
      {/* Section heading */}
      <div className="text-center mb-12 ">
        <h2 className="text-4xl font-extrabold main-text-color tracking-wide">
          Featured Products
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Fresh, crispy, handmade papads delivered to your home.
        </p>
      </div>

      {/* Products Grid */}
      {/* <div className="px-4 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-center"> */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Card 1 */}
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
