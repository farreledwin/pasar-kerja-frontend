import { createSelector } from 'reselect';

const selectAllJobList = (state) => state.joblist;

export const selectAllDataJobList = createSelector([ selectAllJobList ], (job) => job.joblist);

export const selectAllDataJobDetail = createSelector([selectAllJobList], (job) => job.jobdetail);

export const selectAllDataJobReview = createSelector([selectAllJobList], (job) => job.jobreview);

export const selectIsFetchingReview = createSelector([selectAllJobList], (job) => job.isFetchingJobReview);

export const selectBookingData = createSelector([selectAllJobList], (job) => job.bookingData);

export const selectSearchData = createSelector([selectAllJobList], (job) => job.searchDataJob);