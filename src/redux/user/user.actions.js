import {
	userTypes
} from './user.types';

export const setToogleDropDown = () => ({
	type: userTypes.TOGGLE_DROPDOWN
});

export const setToogleRegisterDropDown = () => ({
	type: userTypes.TOGGLE_REGISTER_DROPDOWN
});

export const setRecommendedJobDropDown = () => ({
	type: userTypes.TOOGLE_SET_RECOMMENDED_JOB
});

export const setContractTypeJobDropDown = () => ({
	type: userTypes.TOOGLE_SET_CONTRACT_TYPE
});

export const setCityJobDropDown = () => ({
	type: userTypes.TOOGLE_SET_CITY_JOB
});

export const startLoginUser = (emailAndPassword) => ({
	type: userTypes.LOGIN_USER,
	payload: emailAndPassword
});

export const successLoginUser = (data) => ({
	type: userTypes.SUCCESS_LOGIN,
	payload: data
});

export const failedLoginUser = (error) => ({
	type: userTypes.FAILED_LOGIN_USER,
	payload: error
});

// export const startDecyrptDataUser = () => ({
// 	type: userTypes.DECRYPT_DATA_USER
// });

export const successDecryptDataUser = (data) => ({
	type: userTypes.SUCCESS_DECRYPT_USER,
	payload: data
});

export const userLogOut = () => ({
	type: userTypes.USER_LOGGED_OUT
});

export const isLoggedInOrNot = () => ({
	type: userTypes.IS_LOGIN_OR_NOT
});

export const startRegisterUser = (data) => ({
	type: userTypes.START_REGISTER_USER,
	payload: data
});

export const successRegisterUser = (message) => ({
	type: userTypes.SUCCESS_REGISTER_USER,
	payload: message
});

export const startFetchProfile = (data) => ({
	type: userTypes.START_FETCH_PROFILE,
	payload: data
});

export const successFetchProfile = (data) => ({
	type: userTypes.SUCCESS_FETCH_PROFILE,
	payload: data
});