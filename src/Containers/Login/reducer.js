import {fromJS} from "immutable";
import {LOGIN_SUCCEEDED, LOGIN_FAILED} from '../../Redux/consts';

const initialState = fromJS(
        {
            isLoggedOn: false,
            loginError: null
        }
    );

export default function MapReducer(state = initialState, action){
    switch (action.type) {
        case LOGIN_SUCCEEDED:
            return state.set('isLoggedOn', true);
        case LOGIN_FAILED:
            return state.set('loginError', action.message);
        default:
            return state;
    }
}