import {
	JobListTypes
} from './joblist.types';

export const startFetchJobList = (data) => ({
	type: JobListTypes.START_FETCH_JOB_LIST,
	payload: data
});

export const successFetchJobList = (data) => ({
	type: JobListTypes.SUCCESS_FETCH_JOB_LIST,
	payload: data
});

export const startFetchJobDetail = (data) => ({
	type: JobListTypes.START_FETCH_JOB_DETAIL,
	payload: data
});

export const successFetchJobDetail = (data) => ({
	type: JobListTypes.SUCCESS_FETCH_JOB_DETAIL,
	payload: data
});

export const startFetchReview = (data) => ({
	type: JobListTypes.START_FETCH_REVIEW,
	payload: data
});

export const successFetchReview = (data) => ({
	type: JobListTypes.SUCCESS_FETCH_REVIEW,
	payload: data
});

export const saveBookingJob = (data) => ({
	type: JobListTypes.SAVE_JOB_BOOKING,
	payload:data
});

export const startBookingJob = (data) => ({
	type: JobListTypes.START_INSERT_BOOKING,
	payload: data
});

export const successInsertBooking = (data) => ({
	type: JobListTypes.SUCCESS_INSERT_BOOKING,
	payload: data
});

export const startSearchingJob = (data) => ({
	type: JobListTypes.START_SEARCH_JOB,
	payload: data
});

export const startInsertJob = (data) => ({
	type: JobListTypes.START_INSERT_JOB,
	payload: data
});

export const successInsertJob = (success) => ({
	type: JobListTypes.SUCCESS_INSERT_JOB,
	payload: success
});
