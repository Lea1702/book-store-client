import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as services from '../services/services'

function* onLogin (action) {
    console.log("onLogin");
    try {
        const user_data = yield call(services.login, action.email, action.password);
        yield put({type: "LOGIN_SUCCEEDED", userData: user_data});
    } catch (e) {
        console.log("login failed : ", e.message);
        yield put({type: "LOGIN_FAILED", message: e.message});
    }
}

function* getBooksList () {
    try {
        const booksList = yield call(services.getBooksList);
        console.log("booksList 1 :", booksList);
        yield put({type: "GET_BOOKS_LIST_SUCCEED", booksList: booksList});
    } catch (e) {
        yield put({type: "GET_BOOKS_LIST_FAILED", message: e.message});
    }
}



export function* mySaga() {
    yield takeEvery("LOG_IN", onLogin);
    yield takeEvery("GET_BOOKS_LIST", getBooksList);
    // yield takeEvery("ON_GET_CLIPS", onGetClips);
    // yield takeEvery("ON_DELETE_URL", onDeleteUrl);

}



