import {takeLatest} from 'redux-saga/effects';
import ACTION_TYPE from '../actions/actionTypes.js';
import {authUserSaga} from "./authUserSaga";


export default function* rootSaga() {

    yield takeLatest(ACTION_TYPE.AUTH_USER_ACTION, authUserSaga);

}