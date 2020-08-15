import { EduTrainingTypes } from './edu-training.types';

export const startInsertEduTraining = (data) => ({
    type: EduTrainingTypes.START_INSERT_EDU_TRAINING,
    payload: data
});
