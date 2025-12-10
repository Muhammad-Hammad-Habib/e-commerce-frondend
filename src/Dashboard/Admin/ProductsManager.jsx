import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const ProductsManager = () => {
  const [products, setProducts] = useState([]);

  // Delete product
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="second-main-bg p-4 sm:p-8 min-h-[calc(100vh-65px)]">
      {/* Add Product Button */}
      <button
        className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600"
        onClick={() => setOpenPopup(true)}
      >
        + Add Product
      </button>

      {/* Popup */}
      <ProductPopup isOpen={openPopup} onClose={() => setOpenPopup(false)} />

      {/* Product Listing */}
      <h2 className="text-3xl font-bold text-[#5C3B0B] mb-4">
        Product Listing
      </h2>

      <div className="bg-white rounded-2xl border border-[#f2d5b3] shadow-sm p-6 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#f2d5b3] text-[#5C3B0B]">
              <th className="py-2">Product Name</th>
              <th className="py-2">Price</th>
              <th className="py-2">Product Image</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr
                key={p.id}
                className="border-b border-[#f7e4cd] text-[#5A3E2B]"
              >
                <td className="py-3 font-semibold">{p.name}</td>
                <td>Rs. {p.price}</td>
                <td>
                  <img
                    src={p.image}
                    alt="img"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                </td>
                <td>
                  <button
                    onClick={() => deleteProduct(p.id)}
                    className="text-white bg-red-500 px-3 py-1 rounded-lg flex items-center gap-1"
                  >
                    <FaTrash size={12} /> Delete
                  </button>
                </td>
              </tr>
            ))}

            {products.length === 0 && (
              <tr>
                <td colSpan="4" className="py-4 text-center text-[#8A6F5A]">
                  No products added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ProductPopup = ({ isOpen, onClose }) => {
  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    price: "",
    img1: null,
    img2: null,
    img3: null,
    img4: null,
  });

  // Handle input change
  const handleInput = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  // Handle image change
  const handleImage = (e) => {
    const file = e.target.files[0];
    setProductForm({ ...productForm, [e.target.name]: file });
  };

  // Add product
  const addProduct = () => {
    if (!productForm.name || !productForm.price || !productForm.img1) {
      alert("Name, Price, and Image 1 are required!");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: productForm.name,
      description: productForm.description,
      price: productForm.price,
      image: URL.createObjectURL(productForm.img1),
    };

    setProducts([newProduct, ...products]);

    // Reset form
    setProductForm({
      name: "",
      description: "",
      price: "",
      img1: null,
      img2: null,
      img3: null,
      img4: null,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white max-w-3xl  p-3 rounded-xl shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
          onClick={onClose}
        >
          ×
        </button>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-[#5C3B0B] mb-2">
          Add Product
        </h1>
        <p className="text-[#7A5336] mb-6">
          Fill in the details of the product you'd like to add.
        </p>

        {/* Add Product Card */}
        <div className="bg-white border border-[#f2d5b3] rounded-2xl p-6 shadow-sm mb-10">
          <div className="grid grid-cols-2 gap-2">
            {/* Product Name */}
            <div className="mb-1">
              <label className="block text-sm font-semibold main-text-color ">
                Product Name
              </label>
              <input
                name="name"
                value={productForm.name}
                onChange={handleInput}
                type="text"
                className="w-full input-field"
                placeholder="Product Name"
              />
            </div>
            {/* Product Category */}

            <div>
              <label className="block text-sm font-medium main-text-color">
                Category
              </label>
              <select className="w-full input-field">
                <option value="">Select Category</option>
                <option value="1">1 Select Category</option>
                <option value="2">2 Select Category</option>
              </select>
            </div>

            {/*Short Description */}
            <div className="mb-1">
              <label className="block text-sm font-semibold main-text-color mb-1">
                Product Description
              </label>
              <textarea
                name="description"
                value={productForm.description}
                onChange={handleInput}
                className="w-full input-field"
                placeholder="Product Short Description"
              />
            </div>

            {/*Description */}
            <div className="mb-1">
              <label className="block text-sm font-semibold main-text-color mb-1">
                Product Description
              </label>
              <textarea
                name="description"
                value={productForm.description}
                onChange={handleInput}
                className="w-full input-field"
                placeholder="Product Description"
              />
            </div>
          </div>

          {/* Image Inputs */}
          <div className="grid grid-cols- sm:grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((num) => (
              <div key={num}>
                <label className="block text-sm font-semibold main-text-color mb-1">
                  {num} {num === 1 ? "Index/Main (required)" : "(optional)"}
                </label>
                <input
                  type="file"
                  name={`img${num}`}
                  onChange={handleImage}
                  className="w-full input-field"
                />
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="mt-4">
            <label className="block text-sm font-semibold main-text-color mb-1">
              Price
            </label>
            <input
              name="price"
              value={productForm.price}
              onChange={handleInput}
              type="number"
              className="w-full input-field"
              placeholder="Rs."
            />
          </div>

          {/* Add Product Button */}
          <button
            onClick={addProduct}
            className="custom-button w-40 m-auto py-3 text-lg mt-6 rounded-xl"
          >
            <FaPlus className="inline-block mr-2" />
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsManager;
