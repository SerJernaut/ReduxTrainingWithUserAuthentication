import ACTION_TYPE from "../actions/actionTypes";
import {put} from "redux-saga/effects";
import {signInUser, signInUserByRefreshToken, signUpUser} from "../api";

export function * authUserSaga (action) {
    yield put({
        type: ACTION_TYPE.AUTH_USER_REQUEST,
    });
        try {
            const {data: {user}} = action.data
                ? Object.keys(action.data).length > 3
                    ? yield signUpUser(action.data)
                    : yield signInUser(action.data)
                : yield signInUserByRefreshToken();
            yield put({
                type: ACTION_TYPE.AUTH_USER_SUCCESS,
                user: user,
            });

        } catch (e) {
            yield put({
                type: ACTION_TYPE.AUTH_USER_ERROR,
                error: e,
            });
        }

}
