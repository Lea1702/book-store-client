import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as services from '../services/services'
import {toast} from "react-toastify";

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

function* purchaseBook (action) {
    console.log("purchaseBook");
    try {
        return yield call(services.purchaseBook, action.book_id);
   } catch (e) {
   }
}

function* updateBook (action) {
    console.log("updateBook");
    try {
        yield call(services.updateBook, action.title, action.publisher, action.author, action.id);
        yield put({type: "GET_BOOKS_LIST"});
    } catch (e) {
    }
}

function* createBook (action) {
    console.log("createBook");
    try {
        yield call(services.createBook, action.title, action.publisher, action.author);
        yield put({type: "GET_BOOKS_LIST"});

    } catch (e) {
    }
}

function* deleteBook (action) {
    console.log("deleteBook");
    try {
        yield call(services.deleteBook,  action.book_id);
        yield put({type: "GET_BOOKS_LIST"});
    } catch (e) {
    }
}


export function* mySaga() {
    yield takeEvery("LOG_IN", onLogin);
    yield takeEvery("GET_BOOKS_LIST", getBooksList);
    yield takeEvery("PURCHASE_BOOK", purchaseBook);
    yield takeEvery("UPDATE_BOOK", updateBook);
    yield takeEvery("DELETE_BOOK", deleteBook);
    yield takeEvery("CREATE_BOOK", createBook);



}



