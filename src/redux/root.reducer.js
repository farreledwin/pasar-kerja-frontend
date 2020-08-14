import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import typeContractReducer from './loadDataInput/load_data_input.reducer';
import JobListReducer from './joblist/joblist.reducer';
import JobCategoryReducer from './jobcategory/jobcategory.reducer';
import BookingReducer from './booking/booking.reducer';

export default combineReducers({
	user: userReducer,
	contract: typeContractReducer,
	joblist: JobListReducer,
	jobcategory: JobCategoryReducer,
	customerBooking: BookingReducer
});
