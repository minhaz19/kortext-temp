import {useState} from 'react'
import { ImCross } from "react-icons/im";

const EmailVerifyNote = () => {
    const [show,setShow] = useState(true);

    return (
      <div
        className={`w-9/12 md:w-3/4 lg:w-1/2 text-xs md:text-sm  rounded-md p-2 mb-5 flex items-center justify-between font-open-sans ${
          show ? "opacity-100" : "opacity-0 absolute"
        } transition duration-300`}
        style={{ background: "#f4fceb" }}
      >
        <p className="">
          Your shop is not live yet.{" "}
          <span className="font-semibold underline">
            Resend verification email
          </span>
        </p>
        <div>
          <div
            className="w-5 h-5 rounded-full bg-green-400 grid place-items-center cursor-pointer"
            onClick={() => setShow(false)}
          >
            <ImCross className="text-white text-xs" />
          </div>
        </div>
      </div>
    );
}

export default EmailVerifyNote
