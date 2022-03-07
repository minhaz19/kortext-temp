import putRequest from "../requests/putRequest";

const putChangePasswordService = ({token, password}) =>
  new Promise((resolve, reject) => {
    putRequest(`/v1/user/change-password/${token}`, {password})
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export default putChangePasswordService;
