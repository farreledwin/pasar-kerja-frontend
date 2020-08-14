import { takeLatest, put, all, call } from 'redux-saga/effects';

import { JobListTypes } from './joblist.types';

import { successFetchJobList,successFetchJobDetail,successFetchReview, successInsertBooking,successInsertJob } from '../joblist/joblist.action';

import getFetchInstance from '../utils/fetch-data';

import getDataFromResponse from '../utils/get-data-from-res';

export function* successGetDataJobList(res) {
	const data = getDataFromResponse(res);
	yield console.log(data);
	yield put(successFetchJobList(data));
}

export function* successGetDataJobDetail(response) {
	const data = getDataFromResponse(response);
	yield put(successFetchJobDetail(data));
}

export function* fetchJobList({ payload: {start_date, end_date, start_price, end_price,sort } }) {
	const response = yield getFetchInstance().post('getjoblist',{start_date, end_date, start_price, end_price,sort});
	yield successGetDataJobList(response);
}

export function* onJobListStart() {
	yield takeLatest(JobListTypes.START_FETCH_JOB_LIST, fetchJobList);
}

export function* fetchJobDetail({payload : {id}}) {
	const response = yield getFetchInstance().get('jobdetail/'+id);
	yield successGetDataJobDetail(response);
}

export function* successGetDataJobReview(res) {
	const data = getDataFromResponse(res);
	yield put(successFetchReview(data));
};

export function* fetchJobReview({payload: {id}}) {
	const response = yield getFetchInstance().get('jobreview/'+id);
	yield successGetDataJobReview(response);
};

export function* successInsertBookingData(res) {
	const data = getDataFromResponse(res);
	yield put(successInsertBooking(data));
}

export function* fetchInsertBooking({payload: {dateFrom, dateUntil, note, manyDay, email, job_id,total_price,job_name}}) {
	const response = yield getFetchInstance().post('insertbookingjob',{dateFrom, dateUntil, note, manyDay, email, job_id,total_price,job_name});
	yield successInsertBookingData(response);
}

export function* successInsertJobData(res) {
	const data = getDataFromResponse(res);
	yield put(successInsertJob(data));
}

export function* fetchInsertJob({payload: {serviceName,start_time_range,finish_time_range,workcategory,salary,discount,serviceDescription,job_image}}) {
	const response = yield getFetchInstance().post('insertjob',{serviceName,start_time_range,finish_time_range,workcategory,salary,discount,serviceDescription,job_image});
	yield successInsertJobData(response);
}
export function* onJobReviewStart() {
	yield takeLatest(JobListTypes.START_FETCH_REVIEW,fetchJobReview);
};

export function* onJobDetailStart() {
	yield takeLatest(JobListTypes.START_FETCH_JOB_DETAIL, fetchJobDetail);
}

export function* onInsertBookingJobStart() {
	yield takeLatest(JobListTypes.START_INSERT_BOOKING, fetchInsertBooking);
}



export function* onInsertJobStart() {
	yield takeLatest(JobListTypes.START_INSERT_JOB, fetchInsertJob);
}

export function* jobListSagas() {
	yield all([ call(onJobListStart),call(onJobDetailStart),call(onJobReviewStart),call(onInsertBookingJobStart),call(onInsertJobStart) ]);
}
