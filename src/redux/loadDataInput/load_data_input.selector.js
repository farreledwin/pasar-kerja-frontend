import {
    createSelector
} from 'reselect';


export const selectDataInput = (state) => state.contract;

export const selectAllDataContractType = createSelector([selectDataInput], (contract) => contract.contract);

export const selectAllDataRecommendedJob = createSelector([selectDataInput], (recommendedjob) => recommendedjob.recommendedjob)

export const selectAllDataProvince = createSelector([selectDataInput], (province) => province.province);