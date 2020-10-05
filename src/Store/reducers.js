import {LOGIN_SUCCEEDED, LOGIN_FAILED, LOGOUT} from '../Redux/consts';

const initialState =
    {
        isLoggedOn: false,
        loginError: null,
        userData: {},
        booksList: []
    };

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case "LOGIN_SUCCEEDED":
            console.log("LOGIN_SUCCEEDED");
            return  {...state, isLoggedOn : true, userData: action.userData};
        case LOGIN_FAILED:
            return {...state, loginError : action.message};
        case "LOG_OUT":
            localStorage.removeItem("user");
            return {...state, isLoggedOn : false};
        case "GET_BOOKS_LIST_SUCCEED":
            console.log("action.booksList : ", action.booksList);
            return {...state, booksList : action.booksList};
        default:
            return state;
    }
}