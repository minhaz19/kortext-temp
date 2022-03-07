import React from 'react'
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


const SubmitPassword = ({active,setActive}) => {

    const schema = yup.object().shape({
      password: yup.string().required("Password is required"),
      passwordConfirmation: yup.string().oneOf(
        [yup.ref("password"), null],
        "Passwords must match"
      ),
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
    };

    return (
      <div
        className={`absolute top-0 left-0 ${
          active === "3"
            ? "transform translate-x-0"
            : "transform translate-x-full"
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
              type="password"
              className="border-2 focus:outline-none mt-5 h-10 rounded-lg pl-3"
              placeholder="Enter your new password"
              {...register("password", { required: true })}
            />

            <p className="text-red-400">{errors.password?.message}</p>

            <input
              type="password"
              className="border-2 focus:outline-none mt-5 h-10 rounded-lg pl-3"
              placeholder="Confirm your new password"
              {...register("passwordConfirmation", { required: true })}
            />

            <p className="text-red-400">
              {errors.passwordConfirmation?.message}
            </p>

            <button
              className="bg-primary mt-5 h-10 rounded-lg text-white"
              type="button"
              onClick={() => setActive("2")}
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
}

export default SubmitPassword
