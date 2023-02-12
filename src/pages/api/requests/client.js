import { axiosClient } from '../apiClient';

export function login(email, password) {
    return axiosClient.post('/client-login', { email, password })
}

export function essayList(status) {
    return axiosClient.get('/client/essay/list', { params: { status } })
}

export function essayDetails(essayId) {
    return axiosClient.get(`/client/essay/${essayId}/details`)
}

export function selectedEssays(essayId, imagens) {
    return axiosClient.post(`/client/essay/${essayId}/selected-items`, imagens)
}