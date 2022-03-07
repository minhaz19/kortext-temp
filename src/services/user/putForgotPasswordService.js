import putRequest from "../requests/putRequest";

const putForgotPasswordService = (email) =>
  new Promise((resolve, reject) => {
    putRequest(`/v1/user/forgot-password`, {email})
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export default putForgotPasswordService;
