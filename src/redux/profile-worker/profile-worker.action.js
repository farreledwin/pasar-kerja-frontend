import {
    ProfileWorkerTypes
} from './profile-worker.types';

export const startInsertProfileWorker = (data) => ({
    type: ProfileWorkerTypes.START_INSERT_PROFILE_WORKER,
    payload: data
});

export const successInsertProfileWorker = (message) => ({
    type: ProfileWorkerTypes.SUCCESS_INSERT_PROFILE_WORKER,
    payload: message
})