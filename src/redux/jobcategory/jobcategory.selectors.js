import { createSelector } from 'reselect';

const selectAllJobCategory= (state) => state.jobcategory;

export const selectAllDataJobCategory = createSelector([ selectAllJobCategory ], (job) => job.jobcategory);
