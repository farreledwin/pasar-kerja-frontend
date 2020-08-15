import { LanguageFormModalTypes } from './language-modal.types';

const INITIAL_STATE = {
	language_formdata: []
};

const LanguageModalReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LanguageFormModalTypes.START_INSERT_LANGUAGE:
			return {
				...state,
				language_formdata: state.language_formdata.concat(action.payload)
			};
		default:
			return state;
	}
};

export default LanguageModalReducer;
