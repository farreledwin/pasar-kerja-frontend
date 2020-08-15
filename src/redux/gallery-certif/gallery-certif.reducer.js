import { GalleryCertifTypes } from './gallery-certif.types';

const INITIAL_STATE = {
	gallery_certif: []
};

const EduTrainingReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GalleryCertifTypes.START_INSERT_GALLERY_CERTIF:
			return {
				...state,
				gallery_certif: state.gallery_certif.concat(action.payload)
			};
		default:
			return state;
	}
};

export default EduTrainingReducer;
