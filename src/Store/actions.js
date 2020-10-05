
export function onLogIn (email, password) {
    console.log("action");
    return{
        type: "LOG_IN",
        email: email,
        password: password
    }
}

export const getBooksList = (booksList) => {
    return (
        {
            type: "GET_BOOKS_LIST",
            booksList: booksList
        }
    )
};


export function onLogout () {
    return{
        type: "LOG_OUT"
    }
}