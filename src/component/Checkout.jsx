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
    <div className=" min-h-[calc(100vh-65px)] bg-[#f7e1bc] px-4 sm:px-6 py-5 sm:py-8 flex justify-center">
      <div className=" w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT SIDE — FORM */}
        <div className="md:col-span-2 ">
          <h1 className="text-4xl font-bold main-text-color mb-6">
            Billing & Shipping
          </h1>

          <h2 className="text-lg font-semibold main-text-color mb-3">
            Delivery Information
          </h2>

          <div className="space-x-1 grid sm:grid-cols-2 sm:gap-2">
            {/* Full name */}
            <input
              type="text"
              placeholder="Full name"
              className="w-full input-field"
            />
            {/* Phone Number*/}
            <input
              type="tel"
              pattern="[0-9]{11}"
              placeholder="Phone Number (i.e 03xxxxxxxxx)*"
              className="w-full input-field"
            />
            {/* Whatsapp number */}
            <input
              type="tel"
              pattern="[0-9]{11}"
              placeholder="WhatsApp Number (i.e 03xxxxxxxxx)*"
              className="w-full input-field"
            />
            {/* Alternate Phone Number */}
            <input
              type="tel"
              pattern="[0-9]{11}"
              placeholder="Alternate Phone Number (i.e 03xxxxxxxxx)*"
              className="w-full input-field"
            />
            {/* Email Address  */}
            <input
              type="email"
              placeholder="Email Address (i.e abc@gmail.com)*"
              className="w-full input-field"
            />
            {/* Province */}
            <select className="w-full input-field">
              <option>Select Province*</option>
              {provinces.map((p, i) => (
                <option key={i}>{p}</option>
              ))}
            </select>

            {/* Area */}
            <select className=" w-full input-field">
              <option>Select Area*</option>
              {areas.map((a, i) => (
                <option key={i}>{a}</option>
              ))}
            </select>
            {/* Shipping Address  */}
            <input
              type="text"
              placeholder="Shipping Address"
              className="w-full input-field"
            />

            <textarea
              rows="2"
              placeholder="Any Instructions (Optional)"
              className="input-field sm:col-span-2 resize-none"
            ></textarea>
          </div>

          {/* Payment */}
          <div className="">
            <h2 className="d-d-block text-xl font-semibold main-text-color mt-4 mb-3">
              Payment
            </h2>
            <div className="space-y-3 flex ">
              <label className="flex m-0 pr-4 items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                  className="w-4 h-4 text-orange-500"
                />
                <span className="text-[#4A2E0F]">Cash on Delivery</span>
              </label>

              <label className="flex items-center  gap-2  cursor-not-allowed opacity-50">
                <input
                  disabled
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "bank"}
                  onChange={() => setPaymentMethod("bank")}
                  className="w-4 h-4 text-orange-500"
                />
                <span className="text-[#4A2E0F]">
                  Bank Transfer - Disabled for now
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — ORDER SUMMARY */}
        <div className="min-h-100 relative bg-white rounded-xl shadow-md p-4 md:p-3 lg:p-6  ">
          <h2 className="text-xl font-semibold text-[#4A2E0F] mb-5">
            Your Order
          </h2>

          <div className=" max-h-35  md:max-h-50  md:h-60 overflow-auto text-[#4A2E0F] ">
            <div className=" space-y-1">
              {/*  */}
              {/* {[1, 2, 3, 5, 6, 7, 8, 9, 0, 11, 22, 33 ].map(() => { */}
              {[1, 2, 3, 5, 6, 7, 8, 9, 0, 11, 22, 33].map((value) => {
                return (
                  <div key={value} className="flex justify-between">
                    <span>Classic Pipe Papad</span>
                    <span>Rs. 250</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className=" absolute bottom-0 left-0 w-full p-6  ">
            <hr className="my-2 border-[#E4D5C7]" />
            <div className="flex justify-between font-medium mb-0">
              <span>Subtotal</span>
              <span>Rs. 790</span>
            </div>

            <div className="flex justify-between font-medium mb-0">
              <span>Shipping</span>
              <span className="text-green-600 font-semibold">Free</span>
            </div>

            <div className="flex justify-between text-lg font-bold mt-2">
              <span>Total</span>
              <span>Rs. 790</span>
            </div>
            {/* Place Order Button */}
            <button className="w-full mt-6  custom-button font-semibold py-3  transition-all">
              Place Order
            </button>
          </div>
        </div>

        {/* CHECKOUT INSTRUCTIONS */}
        <div className="bg-white rounded-xl shadow-md p-5 my-5 ">
          <h2 className="text-xl font-semibold text-[#4A2E0F] mb-3">
            Instructions
          </h2>

          <ul className="space-y-2 text-[#4A2E0F] leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              Please enter your **correct phone number** so our delivery team
              can contact you.
            </li>

            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              Provide a **complete shipping address** including house number,
              street, and nearest landmark.
            </li>

            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              Double-check your **order summary** before placing the order.
            </li>

            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              Cash on Delivery is currently available; **keep the amount ready**
              during delivery.
            </li>

            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              Delivery may take **2 – 3 working days** depending on your city.
            </li>

            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              For any issue, contact us on WhatsApp after placing your order.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
