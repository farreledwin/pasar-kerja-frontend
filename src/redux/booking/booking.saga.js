import getFetchInstance from '../utils/fetch-data';

import getDataFromResponse from '../utils/get-data-from-res';

import { takeLatest, put, all, call } from 'redux-saga/effects';

import { BookingTypes } from './booking.types';

import { successFetchBooking,successFetchWorkOrder, successChangeStatusWorkOrder } from './booking.action';

export function* successGetAllBooking(response) {
    const data = yield getDataFromResponse(response);

    yield put(successFetchBooking(data));
}

export function* fetchAllBooking({payload: {email}}) {
    const response = yield getFetchInstance().post('showbooking',{email});
	yield successGetAllBooking(response);
}

export function* successGetAllWorkOrder(res) {
    const data = yield getDataFromResponse(res);

    yield put(successFetchWorkOrder(data));
}

export function* successChangeStatus(res) {
    const data = yield getDataFromResponse(res);

    yield put(successChangeStatusWorkOrder(data));
}

export function* fetchAllWorkOrder({payload: {email}}) {
    const response = yield getFetchInstance().post('showAllWorkOrder',{email});
    yield successGetAllWorkOrder(response);
}

export function* fetchStartStatusWorkOrder({payload: {email,name,_id}}) {
    const response = yield getFetchInstance().post('changestatus',{email,name,_id});
    yield successChangeStatus(response);
}

export function* onBookingStart() {
    yield takeLatest(BookingTypes.START_FETCH_ALL_BOOKING,fetchAllBooking);
}

export function* onFetchWorkOrderStart() {
    yield takeLatest(BookingTypes.START_FETCH_ALL_WORKORDER,fetchAllWorkOrder);
}

export function* onChangeStatusWorkOrder() {
    yield takeLatest(BookingTypes.START_CHANGE_STATUS_WORKORDER, fetchStartStatusWorkOrder);
}


export function* bookingSagas() {
	yield all([ call(onBookingStart),call(onFetchWorkOrderStart),call(onChangeStatusWorkOrder) ]);
}