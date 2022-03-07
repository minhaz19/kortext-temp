import axiosInstance from "./axiosInstance";

const postRequest = (url, body, headers) => {
    return new Promise((resolve, reject) => {
        axiosInstance.post(url, body,{...headers})
            .then(res => {
                resolve(res?.data)
            })
            .catch(err => {
                reject(err?.response?.data)
            })
    })
}


export default postRequest