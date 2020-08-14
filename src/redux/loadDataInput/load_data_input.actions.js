import {
    loadDataInputTypes
} from './load_data_input.types';

export const startFetchTypeContract = () => ({
    type: loadDataInputTypes.START_FETCH_TYPE_CONTRACT
});

export const successFetchTypeContract = (data) => ({
    type: loadDataInputTypes.SUCCESS_FETCH_TYPE_CONTRACT,
    payload: data
});

export const failedFetchTypeContract = (error) => ({
    type: loadDataInputTypes.FAILED_FETCH_TYPE_CONTRACT,
    payload: error
});

export const startFetchTypeRecommendedJobs = () => ({
    type: loadDataInputTypes.START_FETCH_RECOMMENDED_JOBS
});

export const successFetchTypeRecommendedJobs = (data) => ({
    type: loadDataInputTypes.SUCCESS_FETCH_RECOMMENDED_JOBS,
    payload: data
});

export const failedFetchTypeRecommendedJobs = (error) => ({
    type: loadDataInputTypes.FAILED_FETCH_TYPE_CONTRACT,
    payload: error
});

export const startFetchProvince = () => ({
    type: loadDataInputTypes.START_FETCH_PROVINCE
});

export const successFetchProvince = (data) => ({
    type: loadDataInputTypes.SUCCESS_FETCH_PROVINCE,
    payload: data
});

export const failedFetchProvince = () => ({
    type: loadDataInputTypes.FAILED_FETCH_PROVINCE
});