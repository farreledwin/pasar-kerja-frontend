import { takeLatest, put, all, call } from 'redux-saga/effects';

import { JobCategoryTypes } from './jobcategory.types';

import { successFetchJobCategory } from '../jobcategory/jobcategory.action';

import getFetchInstance from '../utils/fetch-data';

import getDataFromResponse from '../utils/get-data-from-res';

export function* successGetDataJobCategory(res) {
    const data = getDataFromResponse(res);
	yield console.log(data);
	yield put(successFetchJobCategory(data));
}

export function* fetchJobCategory() {
    const response = yield getFetchInstance().get('showjobcategory');
	yield successGetDataJobCategory(response);
}


export function* onJobCategoryStart() {
    yield takeLatest(JobCategoryTypes.START_FETCH_JOB_CATEGORY, fetchJobCategory);
}

export function* jobCategorySagas() {
	yield all([ call(onJobCategoryStart) ]);
}