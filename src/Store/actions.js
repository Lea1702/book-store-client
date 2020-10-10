export function onLogin (email, password) {
    return{
        type: "LOG_IN",
        email: email,
        password: password
    }
}

export function onSignin (email, password, type1) {
    return{
        type: "SIGN_IN",
        email: email,
        password: password,
        type1: type1
    }
}

export const getBooksList = () => {
    return (
        {
            type: "GET_BOOKS_LIST"
        }
    )
};

export const selectBook = (book) => {
    return (
        {
            type: "BOOK_SELECTED",
            book: book
        }
    )
};

export const purchaseBook = (book_id, book_title) => {
    return (
        {
            type: "PURCHASE_BOOK",
            book_id: book_id,
            book_title: book_title
        }
    )
};

export const onDeleteBook = (book_id) => {
    return (
        {
            type: "DELETE_BOOK",
            book_id: book_id
        }
    )
};

export const onUpdateBook = (title, publisher, author, id) => {
    return (
        {
            type: "UPDATE_BOOK",
            title: title, publisher: publisher, author: author, id: id
        }
    )
};

export const onCreateBook = (title, publisher, author) => {
    return (
        {
            type: "CREATE_BOOK",
            title: title, publisher: publisher, author: author
        }
    )
};

export function onLogout () {
    return{
        type: "LOG_OUT"
    }
}