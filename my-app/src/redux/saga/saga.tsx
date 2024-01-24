/** @format */

import { takeLatest, put, spawn, take } from 'redux-saga/effects';
import { searchSkillsRequest } from '../actions/action-types';
import { CHANGE_SEARCH_FIELD } from '../actions/actions';

function* changeSearchSaga(): Generator {
  while (true) {
    const action: any = yield take(CHANGE_SEARCH_FIELD);
    yield put(searchSkillsRequest(action.payload.search));
  }
}

export default function* saga() {
  yield spawn(changeSearchSaga);
}
