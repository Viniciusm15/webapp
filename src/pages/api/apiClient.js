import axios from 'axios';
import { getToken } from '@/services/Auth'

export const axiosClient = axios.create({
    baseURL: 'http://sandbox-phases-photography.jelastic.saveincloud.net/phases-photography/v1',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

axiosClient.interceptors.request.use((config) => {
    const token = getToken()

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

axiosClient.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        console.log(error)
        let res = error.response;
        console.error("Looks like there was a problem.Status Code: " + res.status);
        return Promise.reject(error);
    }
)
