const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FFF6E5]">
      <div
        className="w-full max-w-3xl flex flex-col justify-center px-4 sm:px-8 py-4 
                  bg-gradient-to-b from-[#FFD89C] to-[#FAB85F] border border-[#FFD89C] 
                  md:rounded-2xl shadow-xl"
      >
        {/* Logo & Heading */}
        <div className="mx-auto text-center">
          <img
            alt="Kacha Papad Logo"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-12 w-auto"
          />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#ce6c45]">
            CREATE ACCOUNT
          </h2>
          <p className="mt-2 text-sm text-[#5B3A29]">
            {/* Join the Kacha Papad family 🍪 */}
            Join the  family 🍪
          </p>
        </div>

        {/* Form Section */}
        <div className="mt-5">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-0.5 sm:gap-2">
            {/* Input Fields */}
            {/* Repeat for Full Name, Email, Phone, Address, Password, Confirm Password, City, Country */}
            <div>
              <label className="block text-sm font-medium text-[#5B3A29]">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Ali Ahmed"
                className="w-full bg-[#FFF6E5] border border-[#FFC67D] rounded-md px-3 py-2 
                       text-[#5B3A29] placeholder:text-gray-500 
                       focus:border-[#fd8e36] focus:ring-2 focus:ring-[#fd8e36]/40 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#5B3A29]">
                Email Address
              </label>
              <input
                type="email"
                placeholder="ali@example.com"
                className="w-full bg-[#FFF6E5] border border-[#FFC67D] rounded-md px-3 py-2 text-[#5B3A29] placeholder:text-gray-500 focus:border-[#fd8e36] focus:ring-2 focus:ring-[#fd8e36]/40 outline-none"
              />
            </div>
            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-[#5B3A29]">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="03XX-XXXXXXX"
                className="w-full bg-[#FFF6E5] border border-[#FFC67D] rounded-md px-3 py-2 text-[#5B3A29] placeholder:text-gray-500 focus:border-[#fd8e36] focus:ring-2 focus:ring-[#fd8e36]/40 outline-none"
              />
            </div>
            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-[#5B3A29]">
                Address
              </label>
              <input
                type="text"
                placeholder="123 Saddar Road, Hyderabad"
                className="w-full bg-[#FFF6E5] border border-[#FFC67D] rounded-md px-3 py-2 text-[#5B3A29] placeholder:text-gray-500 focus:border-[#fd8e36] focus:ring-2 focus:ring-[#fd8e36]/40 outline-none"
              />
            </div>
            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[#5B3A29]">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full bg-[#FFF6E5] border border-[#FFC67D] rounded-md px-3 py-2 text-[#5B3A29] placeholder:text-gray-500 focus:border-[#fd8e36] focus:ring-2 focus:ring-[#fd8e36]/40 outline-none"
              />
            </div>
            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-[#5B3A29]">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full bg-[#FFF6E5] border border-[#FFC67D] rounded-md px-3 py-2 text-[#5B3A29] placeholder:text-gray-500 focus:border-[#fd8e36] focus:ring-2 focus:ring-[#fd8e36]/40 outline-none"
              />
            </div>
            {/* City */}
            <div>
              <label className="block text-sm font-medium text-[#5B3A29]">
                City
              </label>
              <input
                type="text"
                placeholder="Hyderabad"
                className="w-full bg-[#FFF6E5] border border-[#FFC67D] rounded-md px-3 py-2 text-[#5B3A29] placeholder:text-gray-500 focus:border-[#fd8e36] focus:ring-2 focus:ring-[#fd8e36]/40 outline-none"
              />
            </div>
            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-[#5B3A29]">
                Country
              </label>
              <input
                type="text"
                placeholder="Pakistan"
                className="w-full bg-[#FFF6E5] border border-[#FFC67D] rounded-md px-3 py-2 text-[#5B3A29] placeholder:text-gray-500 focus:border-[#fd8e36] focus:ring-2 focus:ring-[#fd8e36]/40 outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-1 mt-4 md:mt-6 md:col-span-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#fd8e36] to-[#fbbf77] text-white py-2 
                       rounded-md font-semibold hover:from-[#fbbf77] hover:to-[#fd8e36] 
                       shadow-md hover:shadow-lg focus:outline-none focus:ring-2 
                       focus:ring-offset-2 focus:ring-[#fd8e36]"
              >
                Register
              </button>
            </div>
          </form>

          {/* Login Link */}
          <p className="mt-8 text-center text-md text-[#5B3A29] font-semibold">
            Already have an account?{" "}
            <a
              href="#"
              className="font-semibold text-[#ce6c45] hover:text-[#fd8e36]"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

// export default Register;

export default SignUp;


