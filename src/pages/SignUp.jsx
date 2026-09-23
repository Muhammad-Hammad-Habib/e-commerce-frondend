import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../config/axios.js";

const SignUp = () => {
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
    const { confirmPassword, ...data } = formData;
    setIsError(null);
    setIsSuccess(false);

    try {
      const respApi = await api.post("/api/user/register_user", {
        ...data,
      });

      setTimeout(() => {
        navigate("/signin");
      }, 2000);
      setIsSuccess(true);

      console.log(respApi);
    } catch (error) {
      setIsError(error.response?.data);
    }
  };

  return (
    <div className="flex justify-center items-center second-main-bg p-4 md:p-0  min-h-[calc(100vh-65px)] bg-[#FFF7ED]">
      <div className="w-full max-w-3xl flex flex-col justify-center px-4 sm:px-8 py-4 bg-[#FFF7ED] border border-[#F6D7BD] rounded-2xl shadow-xl">
        {/* Logo & Heading */}
        <div className="mx-auto text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight main-text-color">
            CREATE ACCOUNT
          </h2>
          <p className="mt-2 text-sm text-[#3F2B20]">Join the family 🍪</p>
        </div>

        {/* Form Section */}
        <div className="mt-5">
          {isSuccess && (
            <h1>Congratulation You have Created account Successfully</h1>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 sm:gap-2"
          >
            {/* Input Fields */}
            {/* Repeat for Full Name, Email, Phone, Address, Password, Confirm Password, City, Country */}
            <div>
              <label className="block text-sm font-medium text-[#3F2B20]">
                Full Name
                <span className="text-red-500 text-sm">*</span>
                {errors.name && (
                  <span className="text-red-500 text-sm float-right pr-2">
                    {errors.name.message}
                  </span>
                )}
              </label>
              <input
                type="text"
                placeholder="i.e Jhon"
                className="w-full input-field"
                {...register("name", { required: "Full Name is required" })}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#3F2B20]">
                Email Address <span className="text-red-500 text-sm">*</span>
                {errors.email && (
                  <span className="text-red-500 text-sm float-right pr-2">
                    {errors.email.message}
                  </span>
                )}
              </label>
              <input
                type="email"
                placeholder="i.e Jhon@example.com"
                className="w-full input-field"
                {...register("email", { required: "Email is required" })}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-[#3F2B20]">
                Whatsapp Number<span className="text-red-500 text-sm">*</span>
                {errors.phone && (
                  <span className="text-red-500 text-sm float-right pr-2">
                    {errors.phone.message}
                  </span>
                )}
              </label>
              <input
                type="tel"
                placeholder="i.e 03123456789"
                className="w-full input-field"
                {...register("phone", {
                  required: "Whatsapp Number is required",
                  pattern: {
                    value: /^[0-9]{11}$/,
                    message: "Number must be 11 digits ",
                  },
                })}
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-[#3F2B20]">
                City
              </label>
              <input
                type="text"
                placeholder="i.e Karachi"
                className="w-full input-field"
              />
            </div>
            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[#3F2B20]">
                Password<span className="text-red-500 text-sm">*</span>
                {errors.password && (
                  <span className="text-red-500 text-sm float-right pr-2">
                    {errors.password.message}
                  </span>
                )}
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full input-field"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
                    message: "must contain  letters and numbers",
                  },
                  minLength: { value: 12, message: "Too week password" },
                })}
              />
            </div>
            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-[#3F2B20]">
                Confirm Password<span className="text-red-500 text-sm">*</span>
                {errors.confirmPassword && (
                  <span className="text-red-500 text-sm float-right pr-2">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full input-field"
                {...register("confirmPassword", {
                  required: "",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />
            </div>

            {/* Submit Button */}
            <div className="  col-span-1 mt-4 md:mt-6 md:col-span-2 text-center">
              {isError && (
                <div className="text-red-500 text-sm">{isError.message}</div>
              )}
              <button
                type="submit"
                className="w-full sm:w-60  text-white py-2  font-semibold custom-button"
              >
                Register
              </button>
            </div>
          </form>

          {/* Login Link */}
          <p className="mt-8 text-center text-md text-[#3F2B20] font-semibold">
            Already have an account?{" "}
            <NavLink
              to="/signin"
              className="font-semibold text-[#B94A0A] hover:text-[#B94A0A]"
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
