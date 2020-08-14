import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.saga';

import { typeContractSagas } from './loadDataInput/load_data_input.saga';

import { jobListSagas } from './joblist/joblist.saga';

import { jobCategorySagas } from './jobcategory/jobcategory.saga';

import {bookingSagas} from './booking/booking.saga';

export default function* rootSaga() {
	yield all([ call(userSagas), call(typeContractSagas), call(jobListSagas),call(jobCategorySagas),call(bookingSagas) ]);
}
