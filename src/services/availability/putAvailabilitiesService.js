import getAuthKey from "../getAuthKey";
import putRequest from "../requests/putRequest";

const putAvailabilitiesService = (dates) =>
  new Promise((resolve, reject) => {
    const token = getAuthKey();
    putRequest(`/v1/availability`, {dates}, {
      headers: {
        "auth-token": token
      }
    })
      .then((res) => {
        //console.log(res.data);
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export default putAvailabilitiesService;
