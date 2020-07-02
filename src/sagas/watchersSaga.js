import { takeEvery } from 'redux-saga/effects';

import { types } from 'actions';
import loginSaga from './loginSaga';

export default function* watchers() {
  yield takeEvery(types.LOGIN, loginSaga);
}