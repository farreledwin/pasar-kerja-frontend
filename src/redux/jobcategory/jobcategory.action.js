import { JobCategoryTypes } from './jobcategory.types';

export const startFetchJobCategory = () => ({
	type: JobCategoryTypes.START_FETCH_JOB_CATEGORY
});

export const successFetchJobCategory = (data) => ({
	type: JobCategoryTypes.SUCCESS_FETCH_JOB_CATEGORY,
	payload: data
});
