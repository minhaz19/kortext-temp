import { useState } from "react";
import SubmitEmail from "./SubmitEmail";
import SubmitOTP from "./SubmitOTP";
import SubmitPassword from "./SubmitPassword";

const ForgetPassword = () => {
  const [active, setActive] = useState("1");

  return (
    <div
      className="font-open-sans relative mt-16 overflow-hidden"
      style={{ height: 580 }}
    >
      <SubmitEmail active={active} setActive={setActive} />
      <SubmitOTP active={active} setActive={setActive} />
      <SubmitPassword active={active} setActive={setActive} />
    </div>
  );
};

export default ForgetPassword;
