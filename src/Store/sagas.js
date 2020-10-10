import { call, put, takeEvery } from 'redux-saga/effects'
import * as services from '../services/services'
import {toast} from "react-toastify";

function* onLogin (action) {
    try {
        const res = yield call(services.login, action.email, action.password);
        const purchasedBooks = yield call(services.getPurchasedBooks);
        toast(res.message);
        yield put({type: "LOGIN_SUCCEEDED", userData: res.user, purchasedBooks: purchasedBooks});
    } catch (e) {
        toast(e.response.data.message);
    }
}

function* onSignin (action) {
    try {
        const res = yield call(services.signin, action.email, action.password, action.type1);
        toast("User successfully signed in");
        yield put({type: "SIGNIN_SUCCEEDED", userData: res});
    } catch (e) {
        toast(e.response.data.message);
    }
}

function* getBooksList () {
    try {
        const booksList = yield call(services.getBooksList);
        let booksDic = {};
        for (let i = 0; i < booksList.length; i++) {
            booksDic[booksList[i].id] = booksList[i];
        }
        let booksArray = [];
        Object.keys(booksList).forEach(function(key) {
            booksArray.push({"value": booksList[key].id, "label": booksList[key].title});
        });
        yield put({type: "GET_BOOKS_LIST_SUCCEED", booksList: booksDic, booksArray: booksArray});
    } catch (e) {
        yield put({type: "GET_BOOKS_LIST_FAILED", message: e.message});
    }
}

function* purchaseBook (action) {
    try {
        yield call(services.purchaseBook, action.book_id);
        yield put({type: "BOOK_PURCHASED", book_title: action.book_title, book_id: action.book_id});
    } catch (e) {
        toast(e.response.data.message);
    }
}

function* updateBook (action) {
    try {
        let res = yield call(services.updateBook, action.title, action.publisher, action.author, action.id);
        toast(res);
        yield put({type: "GET_BOOKS_LIST"});
    } catch (e) {
    }
}

function* createBook (action) {
    try {
        const res = yield call(services.createBook, action.title, action.publisher, action.author);
        toast(res);
        yield put({type: "GET_BOOKS_LIST"});
    } catch (e) {
    }
}

function* deleteBook (action) {
    try {
        const res = yield call(services.deleteBook,  action.book_id);
        toast(res);
        yield put({type: "GET_BOOKS_LIST"});
    } catch (e) {
    }
}

export function* mySaga() {
    yield takeEvery("LOG_IN", onLogin);
    yield takeEvery("SIGN_IN", onSignin);
    yield takeEvery("GET_BOOKS_LIST", getBooksList);
    yield takeEvery("PURCHASE_BOOK", purchaseBook);
    yield takeEvery("UPDATE_BOOK", updateBook);
    yield takeEvery("DELETE_BOOK", deleteBook);
    yield takeEvery("CREATE_BOOK", createBook);
}



