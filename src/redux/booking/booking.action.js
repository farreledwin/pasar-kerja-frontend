import { BookingTypes } from './booking.types';

export const startFetchBooking = (data) => ({
	type: BookingTypes.START_FETCH_ALL_BOOKING,
	payload: data
});

export const successFetchBooking = (data) => ({
	type: BookingTypes.SUCCESS_FETCH_ALL_BOOKING,
	payload: data
});
