import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center second-main-bg h-[calc(100vh-65px)]">
      <div className="flex w-full max-w-md flex-col justify-center px-6 py-12 lg:px-8 bg-[#FFF6E5] rounded-2xl shadow-xl">
        {/* Logo & Heading */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-2xl font-bold tracking-tight main-text-color">
            LOGIN
          </h2>
        </div>

        {/* Form Section */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-3">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#5B3A29]"
              >
                Email address
              </label>
              <div className="">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email"
                  // className="block w-full rounded-md bg-[#FFF6E5] border border-[#FFC67D] px-3 py-2 text-base text-[#5B3A29] placeholder:text-gray-500 focus:border-[#fd8e36] focus:ring-2 focus:ring-[#fd8e36]/40 outline-none shadow-sm sm:text-sm"
                  className="block w-full input-field"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#5B3A29]"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-[#ce6c45] hover:text-[#fd8e36]"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="block w-full input-field"
                />
              </div>
            </div>

            {/* Sign In Button */}
            <div className=" mt-4 md:mt-6 text-center">
              <button
                type="submit"
                className="w-full sm:w-35  text-white py-2  font-semibold custom-button"
              >
                Log In
              </button>
            </div>
          </form>

          {/* Signup Link */}
          <p className="mt-10 text-center text-md text-[#5B3A29] font-semibold">
            Not a member?{" "}
            <NavLink
              to="/signup"
              className="font-semibold text-[#ce6c45] hover:text-[#fd8e36]"
            >
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
