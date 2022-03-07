import getRequest from "../requests/getRequest";

const getVerifyUserTokenService = (token) =>
  new Promise((resolve, reject) => {
    getRequest(`/v1/user/verify-token/${token}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export default getVerifyUserTokenService;
