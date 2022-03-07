import axiosInstance from "./axiosInstance";

const putRequest = (url, body, headers) => {
    return new Promise((resolve, reject) => {
        axiosInstance.put(url, body,{...headers})
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err?.response?.data)
            })
    })
}


export default putRequest;