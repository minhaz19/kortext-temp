import axiosInstance from "./axiosInstance";

const getRequest = (url, headers) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get(url, {...headers})
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err?.response?.data)
            })
    })
}


export default getRequest