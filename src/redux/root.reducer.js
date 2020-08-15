import {
	combineReducers
} from 'redux';
import userReducer from './user/user.reducer';
import typeContractReducer from './loadDataInput/load_data_input.reducer';
import JobListReducer from './joblist/joblist.reducer';
import JobCategoryReducer from './jobcategory/jobcategory.reducer';
import BookingReducer from './booking/booking.reducer';
import EduTrainingReducer from './edu-training/edu-training.reducer';
import GalleryCertifReducer from './gallery-certif/gallery-certif.reducer';
import LanguageModalReducer from './language-modal/language-modal.reducer';
import ProfileWorkerReducer from './profile-worker/profile-worker.reducer';
export default combineReducers({
	user: userReducer,
	contract: typeContractReducer,
	joblist: JobListReducer,
	jobcategory: JobCategoryReducer,
	customerBooking: BookingReducer,
	data_edu: EduTrainingReducer,
	gallery_certif: GalleryCertifReducer,
	language_modal: LanguageModalReducer,
	profileworker: ProfileWorkerReducer
});