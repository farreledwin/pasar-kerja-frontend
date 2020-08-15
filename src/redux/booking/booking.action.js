import {
	BookingTypes
} from './booking.types';

export const startFetchBooking = (data) => ({
	type: BookingTypes.START_FETCH_ALL_BOOKING,
	payload: data
});

export const successFetchBooking = (data) => ({
	type: BookingTypes.SUCCESS_FETCH_ALL_BOOKING,
	payload: data
});

export const startFetchWorkOrder = (data) => ({
	type: BookingTypes.START_FETCH_ALL_WORKORDER,
	payload: data
})

export const successFetchWorkOrder = (data) => ({
	type: BookingTypes.SUCCESS_FETCH_ALL_WORKORDER,
	payload: data
})

export const startChangeStatusWorkOrder = (data) => ({
	type: BookingTypes.START_CHANGE_STATUS_WORKORDER,
	payload: data
});

export const successChangeStatusWorkOrder = (data) => ({
	type: BookingTypes.SUCCESS_CHANGE_STATUS_WORKORDER,
	payload: data
});