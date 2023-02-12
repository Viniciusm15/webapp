import { axiosClient } from '../apiClient';

export function essayDetails(essayId) {
    return axiosClient.get(`/public/essay/${essayId}/details`)
}

export function essayList() {
    return axiosClient.get('/public/essays')
}
