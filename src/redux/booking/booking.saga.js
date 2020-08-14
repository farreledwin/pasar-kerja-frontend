import getFetchInstance from '../utils/fetch-data';

import getDataFromResponse from '../utils/get-data-from-res';

import { takeLatest, put, all, call } from 'redux-saga/effects';

import { BookingTypes } from './booking.types';

import { successFetchBooking } from './booking.action';

export function* successGetAllBooking(response) {
    const data = yield getDataFromResponse(response);

    yield put(successFetchBooking(data));
}

export function* fetchAllBooking({payload: {email}}) {
    const response = yield getFetchInstance().post('showbooking',{email});
	yield successGetAllBooking(response);
}

export function* onBookingStart() {
    yield takeLatest(BookingTypes.START_FETCH_ALL_BOOKING,fetchAllBooking);
}


export function* bookingSagas() {
	yield all([ call(onBookingStart) ]);
}