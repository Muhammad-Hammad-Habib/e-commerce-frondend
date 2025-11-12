const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#FFF6E5]">
      <div className="flex w-full max-w-md flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-b from-[#FFD89C] to-[#FAB85F] border border-[#FFD89C] rounded-2xl shadow-xl">
        {/* Logo & Heading */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Kacha Papad Logo"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-12 w-auto"
          />
          <h2 className="mt-8 text-center text-2xl font-bold tracking-tight text-[#ce6c45]">
            LOGIN
          </h2>
        </div>

        {/* Form Section */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#5B3A29]"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-md bg-[#FFF6E5] border border-[#FFC67D] px-3 py-2 text-base text-[#5B3A29] placeholder:text-gray-500 focus:border-[#fd8e36] focus:ring-2 focus:ring-[#fd8e36]/40 outline-none shadow-sm sm:text-sm"
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
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="block w-full rounded-md bg-[#FFF6E5] border border-[#FFC67D] px-3 py-2 text-base text-[#5B3A29] placeholder:text-gray-500 focus:border-[#fd8e36] focus:ring-2 focus:ring-[#fd8e36]/40 outline-none shadow-sm sm:text-sm"
                />
              </div>
            </div>

            {/* Sign In Button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gradient-to-r from-[#fd8e36] to-[#fbbf77] px-4 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:from-[#fbbf77] hover:to-[#fd8e36] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fd8e36]"
              >
                Sign in
              </button>
            </div>
          </form>

          {/* Signup Link */}
          <p className="mt-10 text-center text-md text-[#5B3A29] font-semibold">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold text-[#ce6c45] hover:text-[#fd8e36]"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};


export default Login;
