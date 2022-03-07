import getAuthKey from "../getAuthKey";
import deleteRequest from "../requests/deleteRequest";

const deleteDeliveryFulFillmentService = (id) =>
new Promise((resolve, reject) => {
    deleteRequest(`v1/fulfillment/pickup/${id}`,  {
        'headers': { 'auth-token': getAuthKey() }
    })
        .then((res) => {
            resolve(res.data);
        })
        .catch((err) => {
            reject(err);
        });
});

export default deleteDeliveryFulFillmentService;
