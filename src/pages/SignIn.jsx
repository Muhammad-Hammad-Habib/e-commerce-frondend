import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../config/axios";
import { useState, useEffect } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const respApi = await api.post("/api/user/login_user", {
        ...formData,
      });
      setIsSuccess(true);
      const { token,role, data: user } = respApi.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      if (role === "ADMIN") {
        navigate("/dashboard/admin");
      } else {
        navigate("/dashboard");
      }
      console.log(respApi);
    } catch (error) {
      setIsError(error.response?.data);
      console.log(error.response?.data);
    }
  };

  return (
    <div className="flex justify-center items-center px-4  second-main-bg min-h-[calc(100vh-65px)]">
      <div className="flex w-full max-w-md flex-col justify-center px-6 py-12 lg:px-8 bg-[#FFF7ED] rounded-2xl shadow-xl">
        {/* Logo & Heading */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-2xl font-bold tracking-tight main-text-color">
            LOGIN
          </h2>
        </div>

        {/* Form Section */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {isSuccess && <h1>Redirecting to Dashboard</h1>}
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
            className="space-y-3"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#3F2B20]"
              >
                Email address<span className="text-red-500 text-sm">*</span>
                {errors.email && (
                  <span className="text-red-500 text-sm  pr-2">
                    {errors.email.message}
                  </span>
                )}
              </label>
              <div className="">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  // className="block w-full rounded-md bg-[#FFF7ED] border border-[#E6CDB9] px-3 py-2 text-base text-[#3F2B20] placeholder:text-gray-500 focus:border-[#B94A0A] focus:ring-2 focus:ring-[#B94A0A]/40 outline-none shadow-sm sm:text-sm"
                  className="block w-full input-field"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#3F2B20]"
                >
                  Password<span className="text-red-500 text-sm">*</span>
                  {errors.password && (
                    <span className="text-red-500 text-sm float-right pr-2">
                      {errors.password.message}
                    </span>
                  )}
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-[#B94A0A] hover:text-[#B94A0A]"
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
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="block w-full input-field"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </div>
            </div>

            {/* Sign In Button */}
            <div className=" mt-4 md:mt-6 text-center">
              {isError && (
                <div className="text-red-500 text-sm">{isError.message}</div>
              )}
              <button
                type="submit"
                className="w-full sm:w-35  text-white py-2  font-semibold custom-button"
              >
                Log In
              </button>
            </div>
          </form>

          {/* Signup Link */}
          <p className="mt-10 text-center text-md text-[#3F2B20] font-semibold">
            Not a member?{" "}
            <NavLink
              to="/signup"
              className="font-semibold text-[#B94A0A] hover:text-[#B94A0A]"
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
