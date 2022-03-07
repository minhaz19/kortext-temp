import axios from 'axios'

const baseURL = 'https://zkmxpf3ag0.execute-api.us-east-1.amazonaws.com/dev'

//const baseURL = 'http://localhost:5000'

const axiosInstance = axios.create({
    baseURL
});


export default axiosInstance