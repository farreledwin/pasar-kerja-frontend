import { BookingTypes } from './booking.types';

const INITIAL_STATE = {
	customerBooking: null
};

const BookingReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case BookingTypes.SUCCESS_FETCH_ALL_BOOKING:
			return {
				...state,
				customerBooking: action.payload
			};
		default:
			return state;
	}
};

export default BookingReducer;
