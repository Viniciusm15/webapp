import { axiosClient } from '../apiClient';

export function queryEssay(status) {
    return axiosClient.get('/client/essay/list', { params: { status } });
}

export function login(email, password) {
    return axiosClient.post('/client-login', { email, password });
}
