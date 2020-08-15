import { createSelector } from 'reselect';

const selectEduTraining = (state) => state.data_edu;

export const selectAllEduTraining = createSelector([selectEduTraining],(data) => data.edu_training);