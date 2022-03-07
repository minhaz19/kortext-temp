import getAuthKey from "../getAuthKey";
import getRequest from "../requests/getRequest";

const getAllCategoryService = () =>
new Promise((resolve, reject) => {
    getRequest(`/v1/category`, {
        'headers': { 'auth-token': getAuthKey() }
    })
        .then((res) => {
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
});

export default getAllCategoryService;
