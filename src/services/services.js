import React from "react";
import axios from "axios";
import authHeader from './auth';

export const login = async (email, password) => {
    console.log("in service");
    try {
        let res = await axios.post(`http://localhost:3001/user/login`, {email : email, password: password});
        console.log("res : ", res);
        if (res.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(res.data));
        }
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

export const getClips = async (email) => {
    try {
        return await axios.get(`http://localhost:8080/getClips/${email}`).data;
    }
    catch (err) {
        throw err;
    }
};

export const deleteUrl = async (email, url) => {
    try {
        await axios.post(`http://localhost:8080/deleteClip`, {email: email, url: url}).data;
        return await getClips(email);
    }
    catch (err) {
        throw err;
    }
};
