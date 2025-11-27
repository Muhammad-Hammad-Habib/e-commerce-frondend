import React, { useState } from "react";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <div className="min-h-screen bg-[#FFF6E5] px-6 py-10 flex justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT SIDE — FORM */}
        <div>
          <h1 className="text-4xl font-bold main-text-color mb-6">Checkout</h1>

          <h2 className="text-lg font-semibold main-text-color mb-3">
            Delivery Information
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full bg-white border border-orange-400 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-300"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full bg-white border border-orange-400 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-300"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full bg-white border border-orange-400 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-300"
            />
            <input
              type="text"
              placeholder="Postal code"
              className="w-full bg-white border border-orange-400 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          {/* Payment */}
          <h2 className="text-xl font-semibold main-text-color mt-8 mb-3">
            Payment
          </h2>

          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
                className="w-4 h-4 text-orange-500"
              />
              <span className="text-[#4A2E0F]">Cash on Delivery</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "bank"}
                onChange={() => setPaymentMethod("bank")}
                className="w-4 h-4 text-orange-500"
              />
              <span className="text-[#4A2E0F]">Bank Transfer</span>
            </label>
          </div>
        </div>

        {/* RIGHT SIDE — ORDER SUMMARY */}
        <div className="bg-white rounded-xl shadow-md p-6 h-fit">
          <h2 className="text-xl font-semibold text-[#4A2E0F] mb-5">
            Your Order
          </h2>

          <div className="space-y-3 text-[#4A2E0F]">
            <div className="flex justify-between">
              <span>Classic Pipe Papad</span>
              <span>Rs. 250</span>
            </div>

            <div className="flex justify-between">
              <span>Ring</span>
              <span>Rs. 300</span>
            </div>

            <div className="flex justify-between">
              <span>Masala</span>
              <span>Rs. 240</span>
            </div>

            <hr className="my-2 border-[#E4D5C7]" />

            <div className="flex justify-between font-medium">
              <span>Subtotal</span>
              <span>Rs. 790</span>
            </div>

            <div className="flex justify-between font-medium">
              <span>Shipping</span>
              <span className="text-green-600 font-semibold">Free</span>
            </div>

            <div className="flex justify-between text-lg font-bold mt-2">
              <span>Total</span>
              <span>Rs. 790</span>
            </div>
          </div>

          {/* Place Order Button */}
          <button className="w-full mt-6  custom-button font-semibold py-3  transition-all">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
