import {
    takeLatest,
    put,
    all,
    call
} from 'redux-saga/effects';

import {
    ProfileWorkerTypes
} from './profile-worker.types';

import {
    successInsertProfileWorker
} from './profile-worker.action';

import getFetchInstance from '../utils/fetch-data';

import getDataFromResponse from '../utils/get-data-from-res';



export function* successInsertWorkerProfile(res) {
    const data = getDataFromResponse(res);
    yield put(successInsertProfileWorker(data));
}

export function* fetchInsertProfileWorker({
    payload: {
        first_name,
        last_name,
        address,
        city,
        email,
        telephone,
        about,
        edu_training_data,
        gallery_certif,
        work_exp,
        id_photo,
        skck,
        photo_with_idcard,
        language_exp
    }
}) {
    const response = yield getFetchInstance().post('insertProfile', {
        first_name,
        last_name,
        address,
        city,
        email,
        telephone,
        about,
        edu_training_data,
        gallery_certif,
        work_exp,
        id_photo,
        skck,
        photo_with_idcard,
        language_exp
    });
    yield successInsertWorkerProfile(response);
}

export function* onProfileWorkerInsertStart() {
    yield takeLatest(ProfileWorkerTypes.START_INSERT_PROFILE_WORKER, fetchInsertProfileWorker);
}

export function* profileWorkerSaga() {
    yield all([call(onProfileWorkerInsertStart)]);
}