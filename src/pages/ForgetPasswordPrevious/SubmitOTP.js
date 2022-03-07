import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SubmitOTP = ({ active, setActive }) => {
  const schema = yup.object().shape({
    otp: yup
      .string()
      .required()
      .matches(/^[0-9]+$/, "OTP should be only digits")
      .min(4, "OTP is 4 digit")
      .max(4, "OTP is 4 digit"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    setActive("3");
  };

  return (
    <div
      className={`absolute top-0 left-0  ${
        active === "1"
          ? "transform translate-x-full"
          : active === "2"
          ? "transform translate-x-0"
          : active === "3"
          ? "transform -translate-x-full"
          : ""
      } w-full h-full transition duration-500 py-14 px-5 lg:p-10`}
    >
      <div
        className="sm:w-1/2 border-t-2 border-l-2 rounded-md p-5 lg:p-24 mx-auto"
        style={{ boxShadow: "10px 10px 15px 2px rgb(204, 197, 197)" }}
      >
        <div className="w-1/2 sm:h-16 mx-auto mb-2 sm:mb-4">
          <img src="/logo.png" alt="" className="h-full w-full" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <input
            className="border-2 focus:outline-none mt-5 h-10 rounded-lg pl-3"
            placeholder="Enter the OTP"
            {...register("otp", { required: true })}
          />
          <p className="text-gray-500 ml-2 mt-1">Check Your Mail for the OTP</p>

          <p className="text-red-400">{errors.otp?.message}</p>

          <button
            className="bg-primary mt-5 h-10 rounded-lg text-white"
            type="button"
            onClick={() => setActive("1")}
          >
            Prev
          </button>

          <button
            className="bg-primary mt-5 h-10 rounded-lg text-white"
            type="submit"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitOTP;
