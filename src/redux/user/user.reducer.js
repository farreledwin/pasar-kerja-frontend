import {
	userTypes
} from './user.types';

const INITIAL_STATE = {
	hidden: false,
	hiddenRegister: false,
	hiddenRecommendedJob: false,
	hiddenContractType: false,
	hiddenCityJob: false,
	isLoggedIn: false,
	user: [],
	error: null,
	successMessage: null
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userTypes.TOGGLE_DROPDOWN:
			return {
				...state,
				hidden: !state.hidden
			};
		case userTypes.TOGGLE_REGISTER_DROPDOWN:
			return {
				...state,
				hiddenRegister: !state.hiddenRegister
			};
		case userTypes.TOOGLE_SET_RECOMMENDED_JOB:
			return {
				...state,
				hiddenRecommendedJob: !state.hiddenRecommendedJob
			};
		case userTypes.TOOGLE_SET_CONTRACT_TYPE:
			return {
				...state,
				hiddenContractType: !state.hiddenContractType
			};
		case userTypes.TOOGLE_SET_CITY_JOB:
			return {
				...state,
				hiddenCityJob: !state.hiddenCityJob
			};
		case userTypes.SUCCESS_LOGIN:
			return {
				...state,
				isLoggedIn: true
			};
		case userTypes.FAILED_LOGIN_USER:
			return {
				...state,
				error: action.payload
			};
		case userTypes.SUCCESS_DECRYPT_USER:
			return {
				...state,
				user: action.payload
			};
		case userTypes.USER_LOGGED_OUT:
			return {
				...state,
				isLoggedIn: false,
					user: []
			};
		case userTypes.SUCCESS_REGISTER_USER:
			return {
				...state,
				successMessage: action.payload
			};
		default:
			return state;
	}
};

export default userReducer;