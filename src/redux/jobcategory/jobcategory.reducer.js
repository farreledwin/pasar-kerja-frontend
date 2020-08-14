import { JobCategoryTypes } from './jobcategory.types';

const INITIAL_STATE = {
	jobcategory: []
};

const JobCategoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case JobCategoryTypes.SUCCESS_FETCH_JOB_CATEGORY:
			return {
				...state,
				jobcategory: action.payload
			};
		default:
			return state;
	}
};

export default JobCategoryReducer;
