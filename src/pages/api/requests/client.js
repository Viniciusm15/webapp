import { axiosClient } from '../apiClient';

export function queryEssay(){
    return axiosClient.get('/client/essay/list');
}

export function login(email, password) {
    return axiosClient.post('/client-login', { email, password });
}