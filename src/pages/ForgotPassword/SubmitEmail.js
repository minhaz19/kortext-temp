import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import putForgotPasswordService from "../../services/user/putForgotPasswordService";
import {withRouter} from "react-router-dom";

const SubmitEmail = ({history}) => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = React.useState(false);
  const onSubmit = (data) => {
    setLoading(true);
    putForgotPasswordService(data.email).then(() => {
      setLoading(false);
      history.push("/");
    }).catch((e) => {
      //console.log(e);
      setLoading(false);
      history.push("/");
    })
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full transition duration-500 py-14 px-5 lg:p-10`}>
      <div
        className="sm:w-1/2 border-t-2 border-l-2 rounded-md p-5 lg:p-24 mx-auto"
        style={{ boxShadow: "10px 10px 15px 2px rgb(204, 197, 197)" }}>
        <div className="w-1/2 sm:h-16 mx-auto mb-2 sm:mb-4">
          <img src="/logo.png" alt="" className="h-full w-full" />
        </div>
        <span className="text-gray-500">
          A link for changing the password will be sent to this email...
        </span>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <input
            className="border-2 focus:outline-none mt-5 h-10 rounded-lg pl-3"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />

          <p className="text-red-400">{errors.email?.message}</p>

          <button
            disabled={loading}
            className="bg-primary mt-5 h-10 rounded-lg text-white"
            type="submit">
            {
              loading
              ?
              "Sending..."
              :
              "Send"
            }
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(SubmitEmail);
