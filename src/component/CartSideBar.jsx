import React from "react";
import { IoClose } from "react-icons/io5";
import demo from "../asset/heroSectionBowl.png";

const CartSideBar = ({ isOpen, toggleCart }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-[#FFF6E5] shadow-2xl 
      transition-transform duration-300 z-50
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* HEADER */}
      <div className="flex justify-between items-center p-4 border-b border-orange-200">
        <h2 className="text-2xl font-bold text-[#75451C]">Cart</h2>
        <button onClick={toggleCart}>
          <IoClose className="text-3xl text-[#75451C] hover:text-orange-500" />
        </button>
      </div>

      {/* ITEMS */}
      <div className="p-2 space-y-4 overflow-y-auto h-[61%]">
        {/* Item Card */}
        <div className="flex items-center bg-white p-1 rounded-xl shadow-sm border border-orange-100">
          <img
            src={demo}
            className="w-auto h-14 object-contain rounded-lg"
            alt="Pipe Papad"
          />

          <div className="ml-3 w-full grid grid-cols-2">
            <div>
              <h3 className="font-semibold text-[#75451C]">Pi</h3>
              <p className="text-sm text-gray-600">Rs. 250</p>
            </div>

            <div className="flex items-center gap-4">
              <button className="w-7 h-7 rounded-md bg-orange-100 text-[#75451C] font-bold">
                -
              </button>
              <span>1</span>
              <button className="w-7 h-7 rounded-md bg-orange-100 text-[#75451C] font-bold">
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TOTAL */}
      <div className="p-2 border-t border-orange-200">
        <div className="flex justify-between text-[#75451C] text-lg mb-1">
          <span>Subtotal:</span>
          <span>Rs. 820</span>
        </div>

        <div className="flex justify-between text-[#75451C] text-lg mb-1">
          <span>Delivery:</span>
          <span>Rs. 150</span>
        </div>

        <hr className="my-1 border-orange-300" />

        <div className="flex justify-between font-bold text-xl text-[#75451C] mb-5">
          <span>Total:</span>
          <span>Rs. 970</span>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-2">
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold shadow">
            Checkout
          </button>

          {/* <button className="w-full py-3  rounded-xl bg-orange-100 text-[#75451C] font-semibold"> */}
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold shadow">
            keep Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSideBar;
