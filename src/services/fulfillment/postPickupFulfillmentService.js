import getAuthKey from "../getAuthKey";
import postRequest from "../requests/postRequest";

const postPickupFulFillmentService = (pickupDetails) =>
new Promise((resolve, reject) => {
    postRequest(`v1/fulfillment/pickup`, pickupDetails ,{
        'headers': { 'auth-token': getAuthKey() }
    })
        .then((res) => {
            resolve(res.data);
        })
        .catch((err) => {
            reject(err);
        });
});

export default postPickupFulFillmentService;
