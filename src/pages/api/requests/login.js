import { axiosClient } from '../apiClient';

const PATH_BASE_LOGIN = '/client-login'

export function login(email, password) {
    return axiosClient.post(PATH_BASE_LOGIN, { email, password });
}