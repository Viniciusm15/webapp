import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'http://sandbox-phases-photography.jelastic.saveincloud.net/phases-photography/v1',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

// axiosClient.interceptors.request.use((config) => {
//     const token = getToken()

//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`
//     }

//     return config
// })

axiosClient.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        return error
    }
    // function (error) {
    //     let res = error.response;
    //     if (res.status == 401) {
    //       window.location.href = “https://example.com/login”;
    //     }
    //     console.error(“Looks like there was a problem. Status Code: “ + res.status);
    //     return Promise.reject(error);
    //   }
)
