import getAuthKey from "../getAuthKey";
import postRequest from "../requests/postRequest";

const postDeliveryFulFillmentService = (deliveryDetails) =>
new Promise((resolve, reject) => {
    postRequest(`v1/fulfillment/delivery`, deliveryDetails ,{
        'headers': { 'auth-token': getAuthKey() }
    })
        .then((res) => {
            resolve(res.data);
        })
        .catch((err) => {
            reject(err);
        });
});

export default postDeliveryFulFillmentService;
