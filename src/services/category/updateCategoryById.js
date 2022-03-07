import getAuthKey from "../getAuthKey";
import putRequest from "../requests/putRequest";

const updateCategoryById = (updateData, id) =>
new Promise((resolve, reject) => {
    putRequest(`v1/category/${id}`, updateData ,{
        'headers': { 'auth-token': getAuthKey() }
    })
        .then((res) => {
            resolve(res.data);
        })
        .catch((err) => {
            reject(err);
        });
});

export default updateCategoryById;