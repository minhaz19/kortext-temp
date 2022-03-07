import getAuthKey from "../getAuthKey";
import putRequest from "../requests/putRequest";

const updateAccount = (updateData) =>
new Promise((resolve, reject) => {
    putRequest(`v1/user/update`, updateData ,{
        'headers': { 'auth-token': getAuthKey() }
    })
        .then((res) => {
            resolve(res.data);
        })
        .catch((err) => {
            reject(err);
        });
});

export default updateAccount;