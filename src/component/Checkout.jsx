import React, { useState } from "react";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const provinces = [
    "Sindh",
    "Punjab",
    "KPK",
    "Balochistan",
    "Gilgit Baltistan",
  ];

  const areas = [
    "Qasimabad",
    "Latifabad",
    "Saddar",
    "Hirabad",
    "City Area",
    "Others",
  ];

  return (
    <div className="min-h-screen bg-[#f7e1bc] px-4 sm:px-6 py-6 flex justify-center">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT — FORM */}
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-4xl font-bold main-text-color">
            Billing & Shipping
          </h1>

          <div>
            <h2 className="text-lg font-semibold main-text-color mb-2">
              Delivery Information
            </h2>

            <div className="grid sm:grid-cols-2 gap-1">
              <input
                type="text"
                placeholder="Full name"
                className="input-field"
              />
              <input
                type="tel"
                placeholder="Phone Number (03xxxxxxxxx)*"
                className="input-field"
              />
              <input
                type="tel"
                placeholder="WhatsApp Number (03xxxxxxxxx)*"
                className="input-field"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="input-field"
              />

              <select className="input-field">
                <option>Select Province*</option>
                {provinces.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>

              <select className="input-field">
                <option>Select Area*</option>
                {areas.map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Shipping Address"
                className="input-field sm:col-span-2"
              />

              <textarea
                rows="2"
                placeholder="Any Instructions (Optional)"
                className="input-field sm:col-span-2 resize-none"
              />
            </div>
          </div>

          {/* PAYMENT */}
          <div className="mt-1">
            <h2 className="text-xl font-semibold main-text-color mb-3">
              Payment Instructions
            </h2>

            <div className="bg-white p-4 rounded-lg text-[#4A2E0F] text-sm">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  A minimum <strong>10% advance payment</strong> is required to
                  confirm your order.
                </li>
                <li>
                  <strong>Cash on Delivery</strong> is available{" "}
                  <strong>only for Hyderabad & Latifabad</strong>. For all other
                  cities,{" "}
                  <strong>
                    full payment must be completed before dispatch
                  </strong>
                  .
                </li>
                <li>
                  Orders are dispatched only after successful{" "}
                  <strong>payment verification</strong>.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT — ORDER SUMMARY */}
        <div className="bg-white rounded-xl shadow-md p-5 flex flex-col">
          <h2 className="text-xl font-semibold text-[#4A2E0F] mb-4">
            Your Order
          </h2>

          <div className="grid grid-cols-[50%_25%_25%] text-md sm:text-lg font-medium text-[#4A2E0F] mb-2">
            <span>Item</span>
            <span className="text">Unit</span>
            <span className="text-center">Price</span>
          </div>
          <hr className="border-[#E4D5C7] mb-1" />

          <div className="flex-1  max-h-65  overflow-auto text-[#4A2E0F]">
            {/* {[1, 2, 3, 4, 5, 63, 4, 5, 63, 4, 5, 6, 3, 4, 5, 6, 7, 8, 9, 10, 11,12, 14,].map((i) => ( */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="grid grid-cols-[50%_25%_25%] text-sm">
                <span>Classic Pipe Papad</span>
                <span className="text-center">1 KG</span>
                <span className="text-right">Rs. 250</span>
              </div>
            ))}
          </div>

          <div className="mt-2 pt-4 border-t border-[#E4D5C7] space-y-1">
            <div className="flex justify-between font-medium">
              <span>Subtotal</span>
              <span>Rs. 750</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>Rs. 750</span>
            </div>

            <button className="mt-1 sm:mt-4 w-full m-auto flex items-center justify-center py-2 custom-button">
              <span>Add to Cart</span>
            </button>
          </div>
        </div>

        {/* INSTRUCTIONS */}
        <div className="bg-white rounded-xl md:col-span-3 shadow-md p-5">
          <h2 className="text-xl font-semibold text-[#4A2E0F] mb-3">
            Instructions
          </h2>

          <ul className="space-y-2 text-[#4A2E0F] text-sm">
            <li>
              • Please enter a valid phone number for delivery coordination.
            </li>
            <li>
              • Provide a complete and accurate shipping address, including a
              nearby landmark.
            </li>
            <li>
              • Review your order details carefully before placing the order.
            </li>
            <li>
              • Estimated delivery time is <strong>2–3 working days</strong>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
