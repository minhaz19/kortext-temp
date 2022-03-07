import SubmitPassword from "./SubmitPassword";
import { withRouter } from "react-router-dom";
import React from "react";
import getVerifyUserTokenService from "../../services/user/getVerifyTokenService";

const ChangePassword = ({ location }) => {
  const urlParams = new URLSearchParams(location.search);
  const token = urlParams.get("token");
  const [verify, setVerify] = React.useState({ loading: true, error: "" });
  const verifyToken = () => {
    setVerify({ loading: true, error: "" });
    getVerifyUserTokenService(token)
      .then(() => {
        setVerify({ loading: false, error: "" });
      })
      .catch((err) => {
        setVerify({
          loading: false,
          error:
            "Token is invalid or expired.Please request again to change the password.",
        });
      });
  };
  React.useEffect(() => {
    verifyToken();
    // eslint-disable-next-line
  }, []);
  return (
    <div
      className="font-open-sans relative mt-16 overflow-hidden"
      style={{ height: 580 }}>
      {verify.loading ? (
        <div className="flex flex-row w-screen justify-center items-center">
          <span
            disabled={true}
            className="py-2 px-8 rounded bg-white text-black flex justify-center items-center flex-row">
            {
              <svg
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            }
            Verifying...
          </span>
        </div>
      ) : (
        <React.Fragment>
          {(verify.error.length === 0 && token) ? (
            <SubmitPassword token={token} />
          ) : (
            <div className="flex flex-row w-screen justify-center items-center text-red-900 font-bold p-2">
              {verify.error}
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default withRouter(ChangePassword);
