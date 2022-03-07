import getAuthKey from "../getAuthKey";
import postRequest from "../requests/postRequest";

const postCategory = (categoryData) =>
new Promise((resolve, reject) => {
    postRequest(`/v1/category`, categoryData, {
        'headers': { 'auth-token': getAuthKey() }
    })
        .then((res) => {
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
});

export default postCategory;