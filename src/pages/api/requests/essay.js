import { axiosClient } from '../apiClient';

const PATH_BASE_CLIENT_ESSAY = '/client/essay/list'

export function queryEssay(){
    return axiosClient.get(PATH_BASE_CLIENT_ESSAY);
}
