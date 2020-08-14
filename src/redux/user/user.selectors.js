import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectUserDropDown = createSelector([ selectUser ], (user) => user.hidden);

export const selectUserRegisterDropDown = createSelector([ selectUser ], (user) => user.hiddenRegister);

export const selectUserRecommendedJobDropDown = createSelector([ selectUser ], (user) => user.hiddenRecommendedJob);

export const selectUserContractTypeDropDown = createSelector([ selectUser ], (user) => user.hiddenContractType);

export const selectUserCityJobDropDown = createSelector([ selectUser ], (user) => user.hiddenCityJob);

export const selectUserData = createSelector([ selectUser ], (user) => user.user);

export const isLoggedInOrNot = createSelector([ selectUser ], (user) => user.isLoggedIn);
