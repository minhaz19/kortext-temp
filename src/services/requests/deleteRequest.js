import axiosInstance from "./axiosInstance";

const deleteRequest = (url, headers) => {
    return new Promise((resolve, reject) => {
        axiosInstance.delete(url, {...headers})
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err?.response?.data)
            })
    })
}


export default deleteRequest;