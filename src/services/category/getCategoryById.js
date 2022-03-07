import getAuthKey from "../getAuthKey";
import getRequest from "../requests/getRequest";

const getCategoryById = (id) =>
new Promise((resolve, reject) => {
    getRequest(`/v1/category/${id}`, {
        'headers': { 'auth-token': getAuthKey() }
    })
        .then((res) => {
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
});

export default getCategoryById;
