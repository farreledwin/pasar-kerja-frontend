import {
	takeLatest,
	put,
	all,
	call
} from 'redux-saga/effects';

import {
	userTypes
} from './user.types';

import {
	successLoginUser,
	successDecryptDataUser,
	userLogOut,
	successRegisterUser,
	successFetchProfile
} from './user.actions';

import getFetchInstance from '../utils/fetch-data';

import getDataFromResponse from '../utils/get-data-from-res';

import {
	setCookie
} from '../utils/cookie';

import Cookies from 'js-cookie';

export function* getDecryptData() {
	const data = Cookies.get('_s');
	const response = yield getFetchInstance().post('decryptdata', {
		data
	});
	const getData = yield getDataFromResponse(response);
	yield put(successDecryptDataUser(getData));
	yield put(successLoginUser());
}

export function* loginSuccess(res) {
	setCookie('_s', getDataFromResponse(res), 1);
	yield getDecryptData();
}

export function* loginStart({
	payload: {
		email,
		password
	}
}) {
	const response = yield getFetchInstance().post('login', {
		email,
		password
	});
	yield loginSuccess(response);
}

export function* onLoginStart() {
	yield takeLatest(userTypes.LOGIN_USER, loginStart);
}

// export function* onDecryptDataStart() {
// 	yield takeLatest(userTypes.DECRYPT_DATA_USER, getDecryptData);
// }

export function* checkUser() {
	const data = Cookies.get('_s');
	if (data === undefined) {
		yield put(userLogOut());
	} else {
		yield getDecryptData();
	}
}

export function* onCheckUserLoggedIn() {
	yield takeLatest(userTypes.IS_LOGIN_OR_NOT, checkUser);
}

export function* successRegister(res) {
	const data = yield getDataFromResponse(res);
	const {
		user_id
	} = yield data;


	setCookie('_s', data, 1);
	yield getDecryptData();
	yield put(successRegisterUser(data));
}

export function* registerUser({
	payload: {
		firstName,
		lastName,
		email,
		password
	}
}) {
	const response = yield getFetchInstance().post('register', {
		firstName,
		lastName,
		email,
		password
	});

	yield successRegister(response);
}

export function* onRegisterStart() {
	yield takeLatest(userTypes.START_REGISTER_USER, registerUser);
}

export function* successFetchProfileUser(res) {
	const data = getDataFromResponse(res);
	yield(put(successFetchProfile(data)));
}

export function* fetchProfileUser({payload: {email}}) {
	const response = yield getFetchInstance().post('viewprofile', {email});

	yield successFetchProfileUser(response);
}

export function* onFetchProfileStart() {
	yield takeLatest(userTypes.START_FETCH_PROFILE, fetchProfileUser);
}

export function* userSagas() {
	yield all([call(onLoginStart), call(onCheckUserLoggedIn), call(onRegisterStart),call(onFetchProfileStart)]);
}