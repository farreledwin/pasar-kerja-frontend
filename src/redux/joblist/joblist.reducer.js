import { JobListTypes } from './joblist.types';

const INITIAL_STATE = {
	joblist: [],
	jobdetail: null,
	jobreview: null,
	isFetchingJobReview: true,
	messageSuccess: '',
	bookingData: null,
	searchDataJob: null
};

const JobListReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case JobListTypes.SUCCESS_FETCH_JOB_LIST:
			return {
				...state,
				joblist: action.payload
			};
		case JobListTypes.SUCCESS_FETCH_JOB_DETAIL:
			return {
				...state,
				jobdetail: action.payload
			};
		case JobListTypes.START_FETCH_REVIEW:
			return {
				...state,
				isFetchingJobReview: true
			}
		case JobListTypes.SUCCESS_FETCH_REVIEW:
			return {
				...state,
				jobreview: action.payload,
				isFetchingJobReview: false
			}
		case JobListTypes.SAVE_JOB_BOOKING:
			return {
				...state,
				bookingData: action.payload
			}
		case JobListTypes.SUCCESS_INSERT_BOOKING:
			return {
				...state,
				messageSuccess: action.payload,
			}
		case JobListTypes.START_SEARCH_JOB:
			return {
				...state,
				searchDataJob: action.payload
			}
		case JobListTypes.SUCCESS_INSERT_JOB:
			return {
				...state,
				messageSuccess: action.payload
			}

		default:
			return state;
	}
};

export default JobListReducer;
