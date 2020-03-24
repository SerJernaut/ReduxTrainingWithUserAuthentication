import ACTION_TYPE from "../actions/actionTypes";

const initialState = {
    isFetching: false,
    user: [],
    error: null
}


export default function authUserReducer (state = initialState, action) {

    switch (action.type) {

        case ACTION_TYPE.AUTH_USER_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case ACTION_TYPE.AUTH_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                user: action.user,
            };
        case ACTION_TYPE.AUTH_USER_ERROR:
            return {
                ...state,
                isFetching: false,
                user: action.user,
            };

        default:
            return state;
    }

}