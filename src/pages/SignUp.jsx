import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center second-main-bg h-[calc(100vh-65px)] bg-[#FFF6E5]">
      <div
        className="w-full max-w-3xl flex flex-col justify-center px-4 sm:px-8 py-4 
                  bg-[#FFF6E5] border border-[#FFD89C] 
                  md:rounded-2xl shadow-xl"
      >
        {/* Logo & Heading */}
        <div className="mx-auto text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight main-text-color">
            CREATE ACCOUNT
          </h2>
          <p className="mt-2 text-sm text-[#5B3A29]">
            {/* Join the Kacha Papad family 🍪 */}
            Join the family 🍪
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
                className="w-full input-field"
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
                className="w-full input-field"
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
                className="w-full input-field"
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
                className="w-full input-field"
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
                className="w-full input-field"
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
                className="w-full input-field"
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
                className="w-full input-field"
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
                className="w-full input-field"
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-1 mt-4 md:mt-6 md:col-span-2 text-center">
              <button
                type="submit"
                className="w-full sm:w-60  text-white py-2  font-semibold custom-button"
              >
                Register
              </button>
            </div>
          </form>

          {/* Login Link */}
          <p className="mt-8 text-center text-md text-[#5B3A29] font-semibold">
            Already have an account?{" "}
            <NavLink
              to="/signin"
              className="font-semibold text-[#ce6c45] hover:text-[#fd8e36]"
            >
              Sign In
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

// export default Register;

export default SignUp;
