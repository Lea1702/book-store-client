const initialState =
    {
        isLoggedOn: false,
        userData: {},
        booksList: [],
        booksListPending: true,
        bookSelected: null,
        purchasedBooks: [],
        booksArray: []
    };

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case "LOGIN_SUCCEEDED":
            return  {...state, isLoggedOn : true, userData: action.userData, purchasedBooks: action.purchasedBooks};
        case "BOOK_PURCHASED":
            let newPurchasedBooks = state.purchasedBooks;
            newPurchasedBooks.push({
                "title" : action.book_title,
                "id": action.book_id
            });
            return {...state, purchasedBooks: newPurchasedBooks};
        case "LOG_OUT":
            localStorage.removeItem("user");
            return {...state, isLoggedOn : false};
        case "GET_BOOKS_LIST_SUCCEED":
            return {...state, booksList : action.booksList, booksArray: action.booksArray, booksListPending: false};
        case "BOOK_SELECTED":
            return {...state, bookSelected : action.book};
        case "UPDATE_BOOK":
            return {...state,  booksListPending: true};
        case "CREATE_BOOK":
            return {...state,  booksListPending: true};
        case "DELETE_BOOK":
            return {...state,  booksListPending: true, bookSelected: null};
        default:
            return state;
    }
}