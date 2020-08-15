import { LanguageFormModalTypes } from './language-modal.types';

export const startInsertLanguage = (data) => ({
    type: LanguageFormModalTypes.START_INSERT_LANGUAGE,
    payload: data
});