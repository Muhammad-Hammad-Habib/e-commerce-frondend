import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const CategoryManager = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const [list, setList] = useState([
    { category: "Papad", sub: "Classic" },
    { category: "Chutney", sub: "Mint" },
    { category: "Rice", sub: "Basmati" },
    { category: "Rice", sub: "Basmati" },
    { category: "Rice", sub: "Basmati" },
  ]);

  const handleAdd = () => {
    if (!category.trim() || !subCategory.trim()) return;

    setList([...list, { category, sub: subCategory }]);
    setCategory("");
    setSubCategory("");
  };

  const handleDelete = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div className="second-main-bg min-h-[calc(100vh-65px)] p-3 sm:p-6 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#5C3B0B] mb-6">
            Add Category
          </h1>

          {/* Top Form Card */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-[#f2d5b3] max-w-xl">
            <label className="block text-[#5A3E2B] font-semibold mb-1">
              Category Name
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter Category"
              className="block w-full input-field"
            />

            <button
              onClick={handleAdd}
              className=" mt-6 custom-button m-auto p-2 rounded-2xl text-white font-bold text-lg shadow"
            >
              <FaPlus className="inline-block mr-2" /> Add Category
            </button>
          </div>
        </div>

        <div>
          {/* List Section */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5C3B0B] mb-6">
            Category List
          </h2>

          <div className="bg-white rounded-2xl border border-[#f2d5b3] shadow-sm">
            {list.length === 0 ? (
              <p className="p-5 text-center text-[#7A5336]">
                No categories added yet.
              </p>
            ) : (
              list.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border-b border-[#f0dcc3]"
                >
                  <div>
                    <p className="text-[#5C3B0B] font-bold text-lg">
                      {item.category}
                    </p>
                    <p className="text-[#7A5336] text-sm">{item.sub}</p>
                  </div>

                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryManager;
