import {
	BookingTypes
} from './booking.types';

const INITIAL_STATE = {
	customerBooking: null,
	allworkorder: [],
	messageStatus: ''
};

const BookingReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case BookingTypes.SUCCESS_FETCH_ALL_BOOKING:
			return {
				...state,
				customerBooking: action.payload
			};
		case BookingTypes.SUCCESS_FETCH_ALL_WORKORDER:
			return {
				...state,
				allworkorder: action.payload
			}
		case BookingTypes.SUCCESS_CHANGE_STATUS_WORKORDER:
			return {
				...state,
				messageStatus: action.payload
			}
			default:
				return state;
	}
};

export default BookingReducer;