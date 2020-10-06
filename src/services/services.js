import React from "react";
import axios from "axios";
import authHeader from './auth';

export const login = async (email, password) => {
    console.log("in service");
    try {
        let res = await axios.post(`http://localhost:3001/user/login`, {email : email, password: password});
        console.log("res : ", res);
        if (res.data.user.token) {
            localStorage.setItem("user", JSON.stringify(res.data.user.token));
        }
        return res.data.user;
    }
    catch (err) {
        throw err;
    }
};

export const signin = async (email, password, type) => {
    console.log("in service");
    try {
        let res = await axios.post(`http://localhost:3001/user/register`, {email : email, password: password, type: type});
        console.log("res : ", res);
        return res.data;
    }
    catch (err) {
        throw err;
    }
};

export const getBooksList = async () => {
    try {
        let res =  await axios.get(`http://localhost:3001/user/books`);
        console.log("getBooksList : ", res);
        return res.data;
    }
    catch (err) {
        console.log("getBooksList err: ", err);
        throw err;
    }
};

export const purchaseBook = async (book_id) => {
    try {
        let res= await axios.post(`http://localhost:3001/user/books/purchase`, {book_id: book_id}, { headers: authHeader() });
        console.log("res purchaseBook : ", res);
        return res.data.message;
    }
    catch (err) {
        console.log("err purchaseBook: ", err.message);
        throw err;
    }
};

export const updateBook = async (title, publisher, author, id) => {
    try {
        let res= await axios.put(`http://localhost:3001/user/book/update`, {title: title, publisher: publisher, author: author, id: id}, { headers: authHeader() });
        console.log("res updateBook : ", res);
        return res.data;
    }
    catch (err) {
        console.log("err purchaseBook: ", err.message);
        throw err;
    }
};

export const createBook = async (title, publisher, author) => {
    try {
        let res= await axios.post(`http://localhost:3001/user/book/create`, {title: title, publisher: publisher, author: author}, { headers: authHeader() });
        console.log("res createBook : ", res);
        return res.data;
    }
    catch (err) {
        console.log("err createBook: ", err.message);
        throw err;
    }
};


export const deleteBook = async (book_id) => {
    try {
        let res= await axios.delete(`http://localhost:3001/user/book/delete/${book_id}`, { headers: authHeader() });
        console.log("res deleteBook : ", res);
        return res.data;
    }
    catch (err) {
        console.log("err purchaseBook: ", err.message);
        throw err;
    }
};

