import axios from 'axios';
import { getToken } from '@/services/Auth'

export const axiosClient = axios.create({
    baseURL: 'http://sandbox-phases-photography.jelastic.saveincloud.net/phases-photography/v1',
    headers: {
        'Content-type': 'application/json',
        'x-api-key': '34f04075-6c9c-46b5-9ef8-9adcba97767c',
        'client_origin': '12345',
        'tracker_id': '12345'
    }
})

axiosClient.interceptors.request.use((config) => {
    const token = getToken()
    if (token) {
        config.headers = {
            'x-api-key': '34f04075-6c9c-46b5-9ef8-9adcba97767c',
            'Authorization': `Bearer ${token}`,
        }
    }

    return config
})

axiosClient.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        return Promise.reject(error);
    }
)
