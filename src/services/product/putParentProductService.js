import getAuthKey from "../getAuthKey";
import putRequest from "../requests/putRequest";

const putParentProductService = (id, props) =>
  new Promise((resolve, reject) => {
    console.log(props);
    const token = getAuthKey();
    putRequest(`/v1/product/update-parent/${id}`, props, {
      headers: {
        "auth-token": token
      }
    })
      .then((res) => {
        console.log(res.data);
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export default putParentProductService;
