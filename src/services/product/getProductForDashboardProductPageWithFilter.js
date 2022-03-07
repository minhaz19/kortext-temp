import getAuthKey from "../getAuthKey";
import getRequest from "../requests/getRequest";

const getProductForDashboardProductPageWithFilter = (query) =>
    new Promise((resolve, reject) => {
        const token = getAuthKey();
        let adjustedQuery = {}
        for(let q in query){
            if(query[q]){
                adjustedQuery[q] = query[q]
            }
        }

        getRequest(`/v1/product/extracted`, {
            headers: {
                "auth-token": token
            },
            params: {
                ...adjustedQuery
            }
        })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });

export default getProductForDashboardProductPageWithFilter;
