import getAuthKey from "../getAuthKey";
import putRequest from "../requests/putRequest";


const putToggleProductStatus = productId => new Promise((resolve, reject) => {
    putRequest('/v1/product/toggle/'+ productId, {}, {
        headers: {
            'auth-token': getAuthKey()
        }
    })
        .then(res => {
            resolve(res.data) 
            console.log(res.data)
        })
        .catch(err => reject(err))
})

export default putToggleProductStatus