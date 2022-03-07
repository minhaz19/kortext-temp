import getAuthKey from "../getAuthKey";
import getRequest from "../requests/getRequest";

const getFulFillmentService = () =>
new Promise((resolve, reject) => {
    getRequest(`/v1/fulfillment`, {
        'headers': { 'auth-token': getAuthKey() }
    })
        .then((res) => {
            resolve(res.data);
        })
        .catch((err) => {
            reject(err);
        });
});

export default getFulFillmentService;
