import {
    ProfileWorkerTypes
} from './profile-worker.types';

const INITIAL_STATE = {
    profileuser: [],
    messageInsertProfileWorker: ''
};

const ProfileWorkerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProfileWorkerTypes.SUCCESS_INSERT_PROFILE_WORKER:
            return {
                ...state,
                messageInsertProfileWorker: action.payload
            };
        default:
            return state;
    }
};

export default ProfileWorkerReducer;