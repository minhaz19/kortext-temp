import getAuthKey from "../getAuthKey";
import getRequest from "../requests/getRequest";

const getSpecificProductService = (productId) =>
new Promise((resolve, reject) => {
    getRequest(`/v1/product/${productId}`, {
        'headers': { 'auth-token': getAuthKey() }
    })
        .then((res) => {
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
});

export default getSpecificProductService;
