import { createSelector } from 'reselect';

const selectLanguageFormData = (state) => state.language_modal;

export const selectAllLanguageFormData = createSelector([selectLanguageFormData],(data) => data.language_formdata);
