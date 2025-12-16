import demo from "../asset/heroSectionBowl.png";

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-[#f2d5b3]">
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={demo}
          alt={product.title}
          className="w-full h-[230px]  transition-transform duration-500 group-hover:scale-105"
        />

        {/* Optional badge */}
        {/* {product.tag && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {product.tag}sdafag345y543hr
          </span>
        )} */}
      </div>

      {/* CONTENT */}
      <div className="p-3 space-y-1">
        <h3 className="text-lg font-semibold main-text-color m-0">
          {product.title}
        </h3>

        <p className="text-md text-[#7A5336] text-left m-0 pb-0.5">posdfbk pskjdasdp aidn apidnk ascnh asdpijh asdiphjad psdj</p>

        {/* PRICE + CTA */}
        <div className="flex items-center justify-between ">
          <span className="text-lg font-bold text-orange-600">
            Rs. {product.price}
          </span>

          <button className="custom-button px-4 py-2 text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
