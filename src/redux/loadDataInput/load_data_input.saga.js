import {
    takeLatest,
    put,
    all,
    call
} from 'redux-saga/effects';

import {
    loadDataInputTypes
} from './load_data_input.types';

import getFetchInstance from '../utils/fetch-data';

import getDataFromResponse from '../utils/get-data-from-res';

import {
    successFetchTypeContract,
    failedFetchTypeContract,
    successFetchTypeRecommendedJobs,
    successFetchProvince
} from './load_data_input.actions';

import axios from 'axios';


export function* successFetchContractData(response) {
    const getData = yield getDataFromResponse(response);

    yield(put(successFetchTypeContract(getData)));
}

export function* successFetchRecommended(response) {
    const getData = yield getDataFromResponse(response);

    yield(put(successFetchTypeRecommendedJobs(getData)));
}

export function* fetchContract() {
    const response = yield getFetchInstance().get('getallcontract');
    yield successFetchContractData(response);
}

export function* fetchRecommendedJobs() {
    const response = yield getFetchInstance().get('getallrecommendedjobs');
    yield successFetchRecommended(response);
}

export function* fetchProvince() {
    const response = yield call(() => axios.get('https://dev.farizdotid.com/api/daerahindonesia/provinsi'));

    yield(put(successFetchProvince(response)));
}

export function* onStartFetchContract() {
    yield takeLatest(loadDataInputTypes.START_FETCH_TYPE_CONTRACT, fetchContract);
}

export function* onStartFetchRecommendedJobs() {
    yield takeLatest(loadDataInputTypes.START_FETCH_RECOMMENDED_JOBS, fetchRecommendedJobs);
}

export function* onStartFetchProvince() {
    yield takeLatest(loadDataInputTypes.START_FETCH_PROVINCE, fetchProvince);
}

export function* typeContractSagas() {
    yield all([call(onStartFetchContract), call(onStartFetchRecommendedJobs), call(onStartFetchProvince)]);
}