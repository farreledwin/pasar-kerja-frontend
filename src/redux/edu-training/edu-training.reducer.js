import { EduTrainingTypes } from './edu-training.types';

const INITIAL_STATE = {
	edu_training: []
};

const EduTrainingReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EduTrainingTypes.START_INSERT_EDU_TRAINING:
			return {
				...state,
				edu_training: state.edu_training.concat(action.payload)
			};
		default:
			return state;
	}
};

export default EduTrainingReducer;
