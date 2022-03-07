import getAuthKey from "../getAuthKey";
import getRequest from "../requests/getRequest";

const getAllProducts = () =>
new Promise((resolve, reject) => {
    getRequest(`/v1/product/extracted`, {
        'headers': { 'auth-token': getAuthKey() }
    })
        .then((res) => {
            resolve(res.data);
        })
        .catch((err) => {
            reject(err);
        });
});

export default getAllProducts;
