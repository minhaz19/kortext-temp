import getAuthKey from "../getAuthKey";
import deleteRequest from "../requests/deleteRequest";

const deleteCategoryById = (id) =>
new Promise((resolve, reject) => {
    deleteRequest(`v1/category/${id}`,  {
        'headers': { 'auth-token': getAuthKey() }
    })
        .then((res) => {
            resolve(res.data);
        })
        .catch((err) => {
            reject(err);
        });
});

export default deleteCategoryById;
