import {
    loadDataInputTypes
} from './load_data_input.types';

const INITIAL_STATE = {
    contract: [],
    recommendedjob: [],
    error: '',
    province: []
}

const typeContractReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
            case loadDataInputTypes.SUCCESS_FETCH_TYPE_CONTRACT:
            return {
                ...state,
                contract: action.payload
            }
            case loadDataInputTypes.FAILED_FETCH_TYPE_CONTRACT:
                return {
                    ...state,
                    error: action.payload
                }
            case loadDataInputTypes.SUCCESS_FETCH_RECOMMENDED_JOBS:
                    return {
                        ...state,
                        recommendedjob: action.payload
                    }
            case loadDataInputTypes.SUCCESS_FETCH_PROVINCE:
                return {
                    ...state,
                    province: action.payload
                }
            default:
                    return state;
    }
}

export default typeContractReducer;